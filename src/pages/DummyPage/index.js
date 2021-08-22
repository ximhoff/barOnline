import { Redirect } from 'react-router-dom';
import './index.scss';
import Header from '../../components/Header';

export default function DummyPage() {
	if (!localStorage.getItem('login')) {
		return <Redirect to={'/login'} />
	}

	return (
		<>
			<Header title="Dummy Page" goBackButton/>
			<h1>Pagina teste para goback</h1>
		</>
	)
}
