import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
    useSignInWithEmailAndPassword,
    useSignInWithFacebook,
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Header from "./Header";
import Loading from "./Loading";
import useToken from "../Hooks/useToken";

const Login = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
        useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] =
        useSignInWithGithub(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();
    const [token] = useToken(googleUser || facebookUser || user);

    if (loading || googleLoading || facebookLoading || githubLoading) {
        return <Loading />;
    }

    let loginError;
    if (error || googleError || facebookError || githubError) {
        loginError = (
            <p className="text-danger">
                <small>
                    {error?.message ||
                        googleError?.message ||
                        facebookError?.message ||
                        githubError?.message}
                </small>
            </p>
        );
    }
    if (token) {
        navigate("/");
    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data);
        console.log(data);
        reset();
    };
    return (
        <div>
            <Header />
            <div className="container py-3">
                <div className="py-lg-5">
                    <div className="py-lg-5">
                        <div className="py-lg-5">
                            <div className=" text-center">
                                <h1 className="fw-semibold display-3 pb-2">
                                    Log In
                                </h1>
                                <p>
                                    Don't have and account?{" "}
                                    <Link to={"/sign-up"}>Sign Up</Link>
                                </p>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 px-lg-5">
                                    <div className="p-lg-5">
                                        <Form onSubmit={handleSubmit(onSubmit)}>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Email address"
                                                className="mb-3"
                                            >
                                                <Form.Control
                                                    {...register("email", {
                                                        required: {
                                                            value: true,
                                                            message:
                                                                "Email is Required",
                                                        },
                                                        pattern: {
                                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                            message:
                                                                "Provide a valid Email",
                                                        },
                                                    })}
                                                    className="border-bottom border-0 rounded-0"
                                                    type="email"
                                                    placeholder="name@example.com"
                                                />
                                                <p className="text-danger">
                                                    {errors.email?.type ===
                                                        "required" && (
                                                        <small className="text-danger">
                                                            {
                                                                errors.email
                                                                    .message
                                                            }
                                                        </small>
                                                    )}

                                                    {errors.email?.type ===
                                                        "pattern" && (
                                                        <small className="text-danger">
                                                            {
                                                                errors.email
                                                                    .message
                                                            }
                                                        </small>
                                                    )}
                                                </p>
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
                                                            message:
                                                                "Password is Required",
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
                                                    {errors.email?.type ===
                                                        "required" && (
                                                        <small className="text-danger">
                                                            {
                                                                errors.password
                                                                    .message
                                                            }
                                                        </small>
                                                    )}

                                                    {errors.email?.type ===
                                                        "minLength" && (
                                                        <small className="text-danger">
                                                            {
                                                                errors.password
                                                                    .message
                                                            }
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
                                                <p className="">
                                                    <small>
                                                        <Link to="/">
                                                            Forgot Password or
                                                            Email
                                                        </Link>
                                                    </small>
                                                </p>
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
                                <div className="col-lg-6 px-lg-5 border-start">
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
                            <div className="col-lg-6 mx-auto mb-5">
                                <p className="text-center mx-auto text-muted">
                                    <small>
                                        * By Logging in, you agree to our{" "}
                                        <span className="text-primary">
                                            Terms of Use
                                        </span>{" "}
                                        and to receive Creative Agency emails &
                                        updates and acknowledge that you read
                                        our{" "}
                                        <span className="text-primary">
                                            Privacy Policy
                                        </span>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
