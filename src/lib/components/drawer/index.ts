import { Drawer as DrawerPrimitive } from "vaul-svelte";

import Root from "./drawer.svelte";
import Content from "./drawer-content.svelte";
import Description from "./drawer-description.svelte";
import Overlay from "./drawer-overlay.svelte";
import Footer from "./drawer-footer.svelte";
import Header from "./drawer-header.svelte";
import Title from "./drawer-title.svelte";

const Trigger = DrawerPrimitive.Trigger;
const Portal = DrawerPrimitive.Portal;
const Close = DrawerPrimitive.Close;

export { Root, Content, Description, Overlay, Footer, Header, Title, Trigger, Portal, Close };
