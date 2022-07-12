import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithFacebook,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "./Loading";
import auth from "../../firebase.init";

const SignUp = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
        useSignInWithFacebook(auth);
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };
    if (loading || updating || googleLoading || facebookLoading) {
        return <Loading />;
    }

    let loginError;
    if (error || updateError || googleError || facebookError) {
        loginError = (
            <p className="text-danger">
                <small>{googleError?.message || facebookError?.message}</small>
            </p>
        );
    }
    if (googleUser || facebookUser || user) {
        navigate("/");
    }
    return (
        <div className="sign-up-bg">
            <div className="container">
                <div className="pt-4 text-center">
                    <h1 className="fw-semibold display-3 pt-lg-5 pb-2">
                        Sign Up
                    </h1>
                    <p>
                        Already have an account?{" "}
                        <Link to={"/login"}>Log In</Link>
                    </p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 px-lg-5 border-end border-dark ">
                        <div className="p-lg-5 bg-light">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Your Name"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        {...register("name")}
                                        className="border-bottom border-0 rounded-0"
                                        type="text"
                                        placeholder="name.."
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        {...register("email")}
                                        className="border-bottom border-0 rounded-0"
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingPassword"
                                    label="Password"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is Required",
                                            },
                                            minLength: {
                                                value: 6,
                                                message:
                                                    "Must be 6 characters or longer",
                                            },
                                        })}
                                        className="border-bottom border-0 rounded-0"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <p className="text-danger">
                                        {errors.email?.type === "required" && (
                                            <small className="text-danger">
                                                {errors.password.message}
                                            </small>
                                        )}

                                        {errors.email?.type === "minLength" && (
                                            <small className="text-danger">
                                                {errors.password.message}
                                            </small>
                                        )}
                                    </p>
                                </FloatingLabel>

                                <div className="d-flex justify-content-between">
                                    <Form.Group className="mb-3">
                                        <small>
                                            <Form.Check
                                                className="pt-1"
                                                label="Remember Me"
                                                feedback="You must agree before submitting."
                                                feedbackType="invalid"
                                            />
                                        </small>
                                    </Form.Group>
                                </div>
                                {loginError}
                                <div className="py-3">
                                    <button
                                        className="rounded-pill px-5 py-2 btn btn-outline-primary"
                                        type="submit"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="col-lg-6 px-lg-5 ">
                        <div className="p-lg-5">
                            <button
                                onClick={() => signInWithGoogle()}
                                className="p-0 w-100 btn btn-primary mb-3 rounded-0"
                            >
                                <div className="d-flex align-items-center pe-4">
                                    <div className="bg-white p-1">
                                        <FcGoogle className="fs-1" />
                                    </div>
                                    <p className="m-0 px-5">
                                        Continue with Google
                                    </p>
                                </div>
                            </button>
                            <button
                                onClick={() => signInWithFacebook()}
                                className="p-0 w-100 btn btn-light mb-3 border border-dark rounded-0"
                            >
                                <div className="d-flex align-items-center">
                                    <div className="bg-primary p-1">
                                        <GrFacebookOption className="fs-1 text-white" />
                                    </div>
                                    <p className="m-0 px-5">
                                        Continue with Facebook
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 py-5 mx-auto">
                    <p className="text-center mx-auto text-muted">
                        <small>
                            * By Logging in, you agree to our{" "}
                            <span className="text-primary">Terms of Use</span>{" "}
                            and to receive Creative Agency emails & updates and
                            acknowledge that you read our{" "}
                            <span className="text-primary">Privacy Policy</span>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
