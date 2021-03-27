<template>

        <div class="form-control">
            <label>عنوان</label>
            <input v-model="text" type="text" name="text" placeholder="عنوان مورد نظر وارد نمایید..."/>
        </div>
        <div class="form-control">
            <label>شرح</label>
            <textarea style="width: 100%; font-size: 18px; font-family: Tahoma"
                      v-model="day"
                      rows="8"
                      cols="50"
                      type="text"
                      name="day"
                      placeholder="انتقاد، پیشنهاد یا شکایت خود را وارد نمائید..."
            />
        </div>
        <div class="form-control form-control-radio">
            <input v-model="reminder" type="radio" name="type" value="C"/>
            <label for="C">انتقاد</label><br>
            <input v-model="reminder" type="radio" name="type" value="S"/>
            <label for="S">پیشنهاد</label><br>
            <input v-model="reminder" type="radio" name="type" value="P"/>
            <label for="P">شکایت</label><br>
        </div>
        <Button @btn-click="onSave" text="ثبت" color="green" icon-class="fa fa-check"/>
        <Toaster :toasterclass="toastclass" :toasterText=toasttext></Toaster>

</template>

<script>
    import Button from "../../components/Button";
    import Toaster from "../../components/Toaster";

    export default {
        name: "AddSgt",
        data() {
            return {
                text: '',
                day: '',
                reminder: false,
                toasttext:'',
                toastclass:''
            }
        },
        components: {
            Button,
            Toaster
        },
        methods: {
            onSave() {
                if (!this.text) {
                    this.toasttext = 'لطفأ عنوان مورد نظر را وارد کنید';
                    this.toastclass = 'show'
                    this.myFunction()
                    return;
                }
                if (!this.day) {
                    this.toasttext = 'لطفأ انتقاد، پیشنهاد یا شکایت خود را وارد نمائید';
                    this.toastclass = 'show'
                    this.myFunction()
                    return;
                }
                const newTask = {
                    id: Math.floor(Math.random() * 1000),
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder
                }

                this.$emit('add-task', newTask);
                this.text = '';
                this.day = '';
                this.reminder = false;
            },
            myFunction() {
                var toast = document.getElementById("snackbar");
                toast.className = "show";
                setTimeout(function () {
                    toast.className = toast.className.replace("show", "");
                }, 5000);
            }
        }
    }
</script>

<style scoped>
    .add-form {
        margin-bottom: 40px;
    }

    .form-control {
        margin: 20px 0;
    }

    .form-control label {
        display: block;
    }

    .form-control input {
        width: 100%;
        height: 40px;
        margin: 5px;
        padding: 3px 7px;
        font-size: 17px;
    }

    .form-control-radio {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 30%;
    }

    .form-control-radio label {
        flex: 1;
    }

    .form-control-radio input {
        flex: 2;
        height: 20px;
    }
</style>