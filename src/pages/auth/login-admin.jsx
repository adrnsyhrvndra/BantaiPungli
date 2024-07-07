import Head from "next/head";
import Image from "next/image";
import gambarTukangPungli from "../../assets/tukang-pungli2.png";
import elemenLoginForm from "../../assets/elemen-login-form.png";
import "swiper/css";
import "swiper/css/pagination";
import LogoForm from "@/components/LogoForm";
import LoginFormContainer from "@/components/LoginFormContainer";
import AlreadyAndForgotPassword from "@/components/AlreadyAndForgotPassword";
import CopyrightAuthForm from "@/components/CopyrightAuthForm";
import AudioGakSudiBayarPungli from "@/components/AudioGakSudiBayarPungli";
import SliderQuoteLoginForm from "@/components/SliderQuoteLoginForm";

const LoginAdmin = () => {
	return (
		<>
			<Head>
				<title>Halaman Login Admin | Bantai Pungli</title>
			</Head>
			<div className="grid grid-cols-12 h-screen">
				{/* <AudioGakSudiBayarPungli/> */}
				<div className="col-span-12 bg-background relative z-0 overflow-y-auto px-56">
					<Image alt="element-login-form" className="absolute top-0 right-0 -z-10" src={elemenLoginForm}/>
					<LogoForm paddingTop="pt-28"/>
					<LoginFormContainer/>
				</div>
			</div>
		</>
	);
};

export default LoginAdmin;