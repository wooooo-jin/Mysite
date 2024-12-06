const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
    static initiate(sequelize){
        Comment.init({
            comment: {
                type: Sequelize.STRING(300),
                allowNull: false,
            },
            // created_at:{
            //     type: Sequelize.DATE,
            //     allowNull : true,
            //     defaultValue: Sequelize.NOW,
            // }
        },{
            sequelize,
            timestamps: true,
            modelName: 'Comment',
            tableName: 'comments',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'

        })
    }
    static associate(db){
        db.Comments.belongsTo(db.User, {foreignKey:'commenter', targetKey: 'id'})
    }

}

module.exports = Comment;