export const Validate = (data, type) => {
    const errors = {};

    if (!data.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email adress is invalid";
    } else {
        delete errors.email;
    }

    if (!data.password) {
        errors.password = "Password required";
    } else if (data.password.length < 6) {
        errors.password = "Password needs tobe 6 characters or more";
    } else {
        delete errors.password;
    }


    if (type === 'singup') {

        if (!data.name.trim()) {
            errors.name = "Username required";
        } else {
            delete errors.name;
        }

        if (!data.comfirmPassword) {
            errors.comfirmPassword = "comfirm the password";
        } else if (data.comfirmPassword !== data.password) {
            errors.comfirmPassword = "password do not match";
        } else {
            delete errors.comfirmPassword;
        }

        if (data.isAccepet) {
            delete errors.isAccepet;

        } else {
            errors.isAccepet = "Accept our regulationes";
        }

    }

    return errors;

}
