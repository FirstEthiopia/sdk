/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { setActionModalOpen, setWalletsModalOpen } from 'src/app/controllers/app-controller';
import App from './App';

export const widgetController = {
    openWalletsModal: (): void => void setWalletsModalOpen(true),
    closeWalletsModal: (): void => void setWalletsModalOpen(false),
    openActionsModal: (): void => void setActionModalOpen(true),
    closeActionsModal: (): void => void setActionModalOpen(false),
    renderApp: (root: string): (() => void) =>
        render(() => <App />, document.getElementById(root) as HTMLElement)
};
