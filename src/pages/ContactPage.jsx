// Local Imports
import NavigationBar from "../components/NavigationBar";
import Background from "../images/Background.png";
// 3rd Party Imports
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPencil, faPhone, faMessage, faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
	const form = useRef();
	const containerRef = useRef(null);
	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [subjectValue, setSubjectValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [messageValue, setMessageValue] = useState("");
	const [animateSuccessState, setAnimateSuccessState] = useState("");
	const [opacitySuccessState, setOpacitySuccessState] = useState("opacity-0");
	const [animateFailedState, setAnimateFailedState] = useState("");
	const [opacityFailedState, setOpacityFailedState] = useState("opacity-0");
	const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
	const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

	const handleNameValue = (e) => {
		setNameValue(e.target.value);
	};

	const handleEmailValue = (e) => {
		setEmailValue(e.target.value);
	};

	const handleSubjectValue = (e) => {
		setSubjectValue(e.target.value);
	};

	const handlePhoneValue = (e) => {
		setPhoneValue(e.target.value);
	};

	const handleMessageValue = (e) => {
		setMessageValue(e.target.value);
	};

	const successAnimation = () => {
		setAnimateSuccessState("animate-fadeIn");
		setOpacitySuccessState("opacity-100");

		setTimeout(() => {
			setAnimateSuccessState("animate-fadeOut");
			setOpacitySuccessState("opacity-0");

		}, "3500");
		setNameValue("");
		setEmailValue("");
		setSubjectValue("");
		setPhoneValue("");
		setMessageValue("");
	};

	const failedAnimation = () => {
		setAnimateFailedState("animate-fadeIn");
		setOpacityFailedState("opacity-100");

		
		setTimeout(() => {
			setAnimateFailedState("animate-fadeOut");
			setOpacityFailedState("opacity-0");

		}, "3500");
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceID, templateID, form.current, publicKey)
			.then(() => {
				successAnimation();
			}, () => {
				failedAnimation();
			});

		setNameValue("");
		setEmailValue("");
		setSubjectValue("");
		setPhoneValue("");
		setMessageValue("");
	};

	const handleScrollChange = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = 0; // Reset the scroll position to top
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleScrollChange); // Attach event listener on window resize

		return () => {
			window.removeEventListener("resize", handleScrollChange); // Wait for the EventListener to mount before dismounting
		};
	}, []);

	return (
		<>
			<div ref={containerRef} className="h-screen overflow-y-scroll">
				<img className="absolute w-screen h-screen object-cover bottom-[36rem] z-[-10]" src={Background} />
				<div className={`absolute flex w-screen justify-center mt-24 ${animateSuccessState} ${opacitySuccessState}`}>
					<div className="flex h-10 w-80 bg-green-500 items-center text-white font-alte-bold text-lg px-4">
						<FontAwesomeIcon icon={faCircleCheck} style={{ color: "#ffffff" }} />
						<p className="ml-2">Email successfully sent!</p>
					</div>
				</div>

				<div className={`absolute flex w-screen justify-center mt-24 ${animateFailedState} ${opacityFailedState}`}>
					<div className="flex h-10 w-80 bg-custom-red items-center text-white font-alte-bold text-lg px-4">
						<FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#ffffff" }} />
						<p className="ml-2">Failed to send your email...</p>
					</div>
				</div>

				{/* Navigation Bar */}
				<div className="relative">
					<NavigationBar isContactPage={true}/>
				</div>

				<div className="relative">
					<div className="flex flex-col mt-8 w-full items-center max-md:w-screen max-md:px-[17%]">
						<div className="flex bg-red md:w-[48rem]">
							<h1 className="font-alte-bold text-6xl justify-center">
								<span className="text-white">Contact</span>
								<span className="text-custom-red"> Me</span>
							</h1>
						</div>

						<div className="flex-col justify-center mt-10 max-md:w-screen max-md:px-[17%]">
							<form ref={form} onSubmit={sendEmail}>
								<div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:w-[48rem]">
									<div className="flex flex-row items-center">
										<FontAwesomeIcon icon={faUser} className="absolute pointer-events-none h-5 w-5 p-2 ml-2" style={{ color: "#545454" }} />
										<input className="w-full rounded-lg py-2 pl-14 pr-3" name="from_name" value={nameValue} onChange={handleNameValue} type="text" placeholder="Name"></input>
									</div>

									<div className="flex flex-row items-center">
										<FontAwesomeIcon icon={faEnvelope} className="absolute pointer-events-none h-5 w-5 p-2 ml-2" style={{ color: "#545454" }} />
										<input className="w-full rounded-lg py-2 pl-14 pr-3" name="from_email" value={emailValue} onChange={handleEmailValue} type="text" placeholder="Email"></input>
									</div>

									<div className="flex flex-row items-center">
										<FontAwesomeIcon icon={faPencil} className="absolute pointer-events-none h-5 w-5 p-2 ml-2" style={{ color: "#545454" }} />
										<input className="w-full rounded-lg py-2 pl-14 pr-3" name="subject_name" value={subjectValue} onChange={handleSubjectValue} type="text" placeholder="Subject"></input>
									</div>

									<div className="flex flex-row items-center">
										<FontAwesomeIcon icon={faPhone} className="absolute pointer-events-none h-5 w-5 p-2 ml-2" style={{ color: "#545454" }} />
										<input className="w-full rounded-lg py-2 pl-14 pr-3" name="from_phone" value={phoneValue} onChange={handlePhoneValue} type="text" placeholder="Phone"></input>
									</div>
								</div>

								<div className="mt-4">
									<FontAwesomeIcon icon={faMessage} className="absolute pointer-events-none h-5 w-5 p-2 ml-2 mt-1" style={{ color: "#545454" }} />
									<textarea rows={6} className="w-full rounded-lg py-2 pl-14 pr-3 resize-none" value={messageValue} onChange={handleMessageValue} name="from_message" placeholder="Message"></textarea>
								</div>

								<div className="mt-4">
									<button type="submit">
										<div className="flex w-40 h-12 bg-custom-red rounded-lg items-center justify-center">
											<p className="font-alte-bold text-white text-lg">Send Message</p>
										</div>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);

};

export default ContactPage;