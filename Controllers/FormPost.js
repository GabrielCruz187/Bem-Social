export class FormPost{
    constructor(idForm, idTextarea, idUlPost) {
        this.form = document.getElementById(idForm)
        this.textarea = document.getElementById(idTextarea)
        this.ulPost = document.getElementById(idUlPost)
        this.addSubmit()

    }
    onSubmit(func){
        this.form.addEventListener('submit', func)
    }

    formValidate(value){
        if(value === '' || value === null || value === undefined || value.length < 3){
        return false
        }
        return true

    }

    addSubmit(){
        const handleSubmit = (event) =>{
            event.preventDefault();
            
            const newPost = document.createElement('li')
            newPost.classList.add('post');
            newPost.innerHTML = `
            <div class="infoPost">
                    <div class="imgUserPost"></div>

                    <div class="nameAndHour">
                        <strong>Gabriel cruz</strong>
                        <p>21h</p>
                    </div>
                </div>
                <p>
                  ${this.textarea.value}

                </p>

                <div class="actionBtnPost">
                    <button type="button" class="filesPost like"><img src="/img/heart.svg" alt="">Curtir</button>
                    <button type="button" class="filesPost comment"><img src="/img/comment.svg" alt="">Comentar</button>
                    <button type="button" class="filesPost share"><img src="/img/share.svg" alt="">Compartilhar</button>

                </div>
            </li>
            
            
            `;
            this.ulPost.append(newPost)
            this.textarea.value="";
        }
        this.onSubmit(handleSubmit)


    }
}

const postForm = new FormPost('formPost', 'textarea', 'post')