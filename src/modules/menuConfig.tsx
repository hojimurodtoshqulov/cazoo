import AboutPage from "./AboutPage";
import useIntl from "react-intl/src/components/useIntl";
import HomePage from "./HomePage";
{
	const intl = useIntl();
	const t = (id: string) => {
		return intl.formatMessage({ id: id });
	};
}
export const menuConfig: MenuRouteType[] = [
	{
		id: "1",
		label: "Home",
		link: "/",
	},
	{
		id: "2",
		label: "About",
		link: "/#about",
	},
	{
		id: "3",
		label: "Contact",
		link: "/contact",
	},
	{
		id: "4",
		label: "News",
		link: "/news",
	},
	{
		id: "5",
		label: "Наши проекты",
		link: "/projects",
	},
];

export type MenuRouteType = {
	id: string | number;
	link: string;
	label: string;
};
