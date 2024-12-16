const Post = require('../schemas/posts');
const Hashtag = require('../schemas/hashtags');


// 업로드를 하면 afterUploadImage 발동한다.. -> db에 path가 생기는데 이미지를 저장해야하는데 서버에 어느 위치에 저장을 해야하는지 알아야해 이미지를 db에 저장하기 전에 저장 위치를 뽑아주기위한 함수로 afterUploadImage사용 서버에 저장함 path정보를 뽑아줌
exports.afterUploadImage = (req, res) => {
    res.json({url: `/img/${req.file.filename}`}) // 이미지 뒤에 `/img/${req.file.filename}`}) 준다.
}

exports.uploadPost = async(req, res, next) => {
    try{
        const post = await Post.create({
            content:req.body.content, // 
            img: req.body.url,
            user: req.user._id  // 로그인을 하면 req로 유저 정보
        });

        const hashtags = req.body.content.match(/#[^\s#]*/g); //정규 표현식을 사용해서 빼준다. // #여행 #사진 #일본 #제ㅗㅇ
        if(hashtags){
            const result = await Promise.all( 
                hashtags.map(async (tag)=>{
                    const title = tag.slice(1).toLowerCase();   //findor은 SQL
                    let hash = await Hashtag.findOne({title})
                    if(!hash){
                        hash = await Hashtag.create({title})
                    }
                    return hash
                }) 
            );
            post.hashtags = result.map((hash)=>hash._id);
            await post.save();
        }
        res.redirect('/')
    }catch(err){
        console.error(err)
        next(err)
    }
}

// 게시물 수정
exports.updatePost = async (req,res,next)=>{
    try{
        const {postId} = req.params;
        const { content, img } = req.body

        const updateData = { content, img } // 바뀐 해쉬태그 데이터를 다시 여기에 넣어준다.

        const hashtags = content.match(/#[^\s#]+/g);

        if (hashtags) {
            const hashtagDocs = await Promise.all(
                hashtags.map(async (tag)=>{
                    const title = tag.slice(1).toLowerCase().trim();
                    console.log(title)
                    let hashtag = await Hashtag.findOne({title}); //db에서 해쉬태그가 있는지 찾아서 값을줌 
                    if (!hashtag) {
                        hashtag =  await Hashtag.create({title});
                        console.log('해시태그',hashtag)
                    }
                    return hashtag
                })
            );
            updateData.hashtag = hashtagDocs
        }   // new:true는 수정된 반환값
        const updatePost = await Post.findByIdAndUpdate(postId, updateData, {new:true}); //findByIdAndUpdate 업데이트된 값만
        res.json(updatePost)
    } catch(err) {
        console.error(err);
        next(err);
    }
}

// 게시물 삭제
exports.deletePost = async(req,res,next)=>{
    try{
        const {postId} = req.params;
        await Post.findOneAndDelete(postId);
        res.json({message:'Delete Success'})
    }catch(err){
        console.error(err);
        next(err);
    }
}



