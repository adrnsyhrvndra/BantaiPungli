import Head from "next/head";
import Image from "next/image";
import gambarTukangPungli from "../assets/tukang-pungli2.png";
import elemenLoginForm from "../assets/elemen-login-form.png";
import "swiper/css";
import "swiper/css/pagination";
import LogoForm from "@/components/LogoForm";
import LoginFormContainer from "@/components/LoginFormContainer";
import AlreadyAndForgotPassword from "@/components/AlreadyAndForgotPassword";
import CopyrightAuthForm from "@/components/CopyrightAuthForm";
import AudioGakSudiBayarPungli from "@/components/AudioGakSudiBayarPungli";
import SliderQuoteLoginForm from "@/components/SliderQuoteLoginForm";

const Login = () => {
	return (
		<>
			<Head>
				<title>Halaman Login | Bantai Pungli</title>
			</Head>
			<div className="grid grid-cols-12 h-screen">
				{/* <AudioGakSudiBayarPungli/> */}
				<div className="col-span-6 bg-primary bg-pattern-money-pungli bg-blend-multiply bg-contain relative overflow-hidden">
					<div className="grid grid-cols-12">
						<div className="col-span-12">
							<Image 
								className="mx-auto w-[580px] h-[580px] mt-10" 
								src={gambarTukangPungli}
								alt="gambar-pungli"
								style={{
									filter: 'drop-shadow(25px 5px 10px rgba(36, 34, 34, 0.3))'
								}}
							/>
						</div>
						<div className="col-span-12">
							<SliderQuoteLoginForm/>
						</div>
					</div>
				</div>
				<div className="col-span-6 bg-background relative z-0 overflow-y-auto">
					<Image alt="element-login-form" className="absolute top-0 right-0 -z-10" src={elemenLoginForm}/>
					<LogoForm paddingTop="pt-28"/>
					<LoginFormContainer/>
					<AlreadyAndForgotPassword 
						marginTop="mt-6" 
						text="Belum Punya Akun?" 
						directText="Daftar Sekarang"
					/>
					<CopyrightAuthForm/>
				</div>
			</div>
		</>
	);
};

export default Login;
