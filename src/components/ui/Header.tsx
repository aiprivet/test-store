import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="text-white border-b-[1px] border-b-neutral-800">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-xl">
                    <Link href="/">Fake shop</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                <p className="text-neutral-600 transition-all hover:text-white">Catalog</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <p className="text-neutral-600 transition-all hover:text-white">Checkout</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
