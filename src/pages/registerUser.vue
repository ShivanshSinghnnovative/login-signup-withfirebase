<template>
    <div class="h-screen flex align-center justify-center bg-slate-800">
        <div class="m-auto p-4 flex justify-center text-center flex-col w-3/6 backdrop-blur-sm h-fit bg-white/30">
            <h1 class="text-4xl font-black mb-4 text-blue-400">Registration Page</h1>
            <div>
                <input class="p-3 m-2 w-3/5" type="name" placeholder="Enter first name " v-model="signUser.firstName" />
                <div class="text-red-500 text-center mv:text-sm md:text-lg pl-2"
                    v-if="signUser.firstName.trim().length < 5 && errorMessages.length !=0">
                    Firstname length should be greater than 5
                </div>
                <input class="p-3 m-2 w-3/5" type="name" placeholder="Enter Last name " v-model="signUser.lastName" />
                <div class="text-red-500 text-center mv:text-sm md:text-lg pl-2"
                    v-if="signUser.lastName.trim().length < 5 && errorMessages.length>0">
                    Lastname length should be greater than 5
                </div>
                <input class="p-3 m-2 w-3/5" type="number" placeholder="Enter Mobile No" v-model="signUser.mobileNumber" />
                <div class="text-red-500 text-center mv:text-sm md:text-lg pl-2"
                v-if="signUser.mobileNumber == 10  && errorMessages.length!=0" >
                    Phone Number should be 10 digit
                </div>
                <input class="p-3 m-2 w-3/5" type="name" placeholder="Enter your Email  " v-model="signUser.email" />
                <div class="text-red-500 text-center mv:text-sm md:text-lg pl-2"
                v-if="signUser.email.trim().length < 5 && emailCheck.length != 0">
                {{ emailCheck }}
                </div>
                <div class="w-3/5 m-auto  text-right bg-white p-3 mt-2 mb-2 flex justify-between ">
                    <input :type="hidePassword ? 'text' : 'password'" placeholder="Enter Password"
                        class="outline-none w-4/5" v-model="signUser.password" required />
                    <font-awesome-icon :icon="hidePassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"
                        class="cursor-pointer m-1 mt-1;" @click="togglePassword" />
                </div>
                <div class="text-red-500 text-center mv:text-sm md:text-lg pl-2"
                v-if="signUser.password.trim().length < 8 && emailCheck.length > 0">
                Password length should be greater than 8
            </div>
            <div class="text-red-500 text-center md:text-lg mv:text-xs pl-2"
                v-if="signUser.password.trim().length >= 8 && passwordCheck.length != 0">
                {{ passwordCheck }}
            </div>
                <input class="p-3 m-2 w-3/5" type="name" placeholder="Enter confirm password"
                    v-model="signUser.confirmPassword" />
                <div class="text-red-500 text-cenetr mv:text-sm md:text-lg pl-2"
                    v-if="signUser.password !== signUser.confirmPassword && errorMessages.length>0">
                    confirm password should be same as password
                </div>
                <input class="p-3 m-2 w-3/5 border-2 pointer" type="file" id="myFile" name="filename" />
                <button class="w-3/5 m-2 bg-blue-400 text-white text-2xl p-3 text-center" @click="createAccount">
                    User Register
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { signUpApi } from "../composable/loginSignup.js";
const { signUser, createAccount , errorMessages ,  emailCheck,passwordCheck ,togglePassword,hidePassword } = signUpApi();
</script>
