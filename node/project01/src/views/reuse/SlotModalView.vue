<template>
<div>
    <button
    class = "btn btn-primary"
    data-bs-toggle = "modal"
    data-bs-target = "#userModal"
    >
    Show Modal
    </button>
    &emsp;

    <button
    class = "btn btn-primary"
    data-bs-toggle = "modal"
    data-bs-target = "#userModal2"
    >
    Show Modal
    </button>
    &emsp;

    <button
    class = "btn btn-primary"
    data-bs-toggle = "modal"
    data-bs-target = "#userModal3"
    >
    Show Modal
    </button>

    <slot-modal modalId="userModal">
        <template v-slot:title>모달창 타이틀</template>
        <template v-slot:body>
            <div class="row gy-2">
                <p>모달 1</p>
                <p>모달 2</p>
                <p>모달 3</p>
            </div>
        </template>
        <template v-slot:footer>
            <button class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
        </template>         
    </slot-modal>

    <slot-modal modalId="userModal2">
        <template v-slot:title>사용자 입력 창</template>
        <template v-slot:body>
            <div class="row gy-2">

                <div class="col-3">
                    <label for="" class="form-label">이메일주소</label>
                </div>
                <div class="col-9">
                    <input type="email" id="" class="form-control"/>
                </div>

                <div class="col-3">
                    <label for="" class="form-label">전화번호</label>
                </div>
                <div class="col-9">
                    <input type="tel" id="" class="form-control"/>
                </div>

                <div class="col-3">
                    <label for="" class="form-label">주소</label>
                </div>
                <div class="col-9">
                    <input type="text" id="" class="form-control"/>
                </div>

            </div>
        </template>
        <template v-slot:footer>
            <button class="btn btn-primary">저장</button>
            <button class="btn btn-danger" data-bs-dismiss="modal">닫기</button>
        </template>
    </slot-modal>
</div>
</template>

<script>
import SlotModal from '@/components/flagment/SlotModal.vue';

export default{ 
    name:'',
    components:{ SlotModal },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>