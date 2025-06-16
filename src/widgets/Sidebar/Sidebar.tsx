import {classNames} from "shared/lib";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "../ThemeSwitcher";
import {Button} from "shared/ui";
import {LanguageSwitcher} from "../LanguageSwitcher";

interface SidebarProps {
    className?: string;
    collapsed: boolean;
    toggleCollapse: () => void;
}

const Sidebar = ({className, collapsed, toggleCollapse}: SidebarProps) => {
    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={toggleCollapse}>toggle</Button>
            <div className={cls.switcherWrapper}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;