import { reactive, ref } from "vue";
import { userRegisterUse } from '../store/registerUser.js'

export const signUpApi = () => {
    const errorMessages = ref("");
    const passwordCheck = ref("");
    const emailCheck = ref("");
    const hidePassword = ref(false);
    const signUser = reactive({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const store = userRegisterUse();
    const { createUser } = store;
    const createAccount = async () => {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!passwordRegex.test(signUser.password)) {
            passwordCheck.value =
                "Password must contain at least one digit, one lowercase letter, and one uppercase letter";
        }
        else{
            passwordCheck.value=""
        }
        if (emailRegex.test(signUser.email)) {
            if (signUser.firstName.trim().length > 5) {
                if (signUser.lastName.trim().length > 5) {
                    if (signUser.mobileNumber.length == 10) {
                        if (signUser.password == signUser.confirmPassword) {
                                errorMessages.value = "";
                                passwordCheck.value = "";
                                emailCheck.value = "";
                                await createUser({
                                    firstName: signUser.firstName,
                                    lastName: signUser.lastName,
                                    mobileNumber: signUser.mobileNumber,
                                    email: signUser.email,
                                    password: signUser.password
                                });
                        } else {
                            errorMessages.value = ("Confirm password should be the same as password");
                        }
                    } else {
                        errorMessages.value = ("Phone Number should be 10 digits");
                    }
                } else {
                    errorMessages.value = ("Lastname length should be greater than 5");
                }
            } else {
                errorMessages.value = ("Firstname length should be greater than 5");
            }
        } else {
            emailCheck.value = "please enter a valid mail ";
        }
    };
    const togglePassword = () => {
        hidePassword.value = !hidePassword.value;
    };
    return {
        signUser,
        createAccount,
        errorMessages,
        passwordCheck,
        emailCheck,
        hidePassword,
        togglePassword,
    };
}

