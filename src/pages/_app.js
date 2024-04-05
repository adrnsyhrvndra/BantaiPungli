import AppShell from "@/components/layouts/AppShell"
import store from "@/store"
import "@/styles/globals.css"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<AppShell>
				<Component {...pageProps} />
			</AppShell>
		</Provider>
	) 
}