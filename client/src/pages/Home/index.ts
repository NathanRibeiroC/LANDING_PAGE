import Home from './Home';

export interface NavbarMenuProps {
    showOrCollapseDropNav: (isServActive: boolean, isHealthActive: boolean) => void;
    servicesDropdown?: boolean;
    healthAndWellnessDropdown?: boolean;
}

export {Home};
