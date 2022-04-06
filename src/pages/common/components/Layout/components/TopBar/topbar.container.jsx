import TopBarView from "./topbar.view";
import './topbar.css';

export default function TopBarContainer(props) {

    const texts = {
        'Dashboard': '',
        'Contacts': '',
        'Calender': '',
        'Clients': '',
        'Template': 'Templates - My Template',
        'Activity': '',
        'Accounting': '',
        'Reports': '',
        'Settings': '',
    };

    return (
        <div className="background ml-3 col-start-3 col-span-10">
            <TopBarView heading={texts[props.text]} />
        </div>
    );
};