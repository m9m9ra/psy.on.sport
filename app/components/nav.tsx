"use client";
// @ts-ignore
import { ArrowLeft, ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import '../sass/nav.css';
import Image from "next/image";

type props = {
	canGoBack?: boolean;
};

export const Navigation: React.FC = ({ canGoBack }: props) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [burger, setBurger] = useState<boolean>(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const toggleBurger = () => {
		setBurger(!burger)
	}

	return (
		<>
			<header ref={ref} className="navbar">
				<div className="layout">
					<Image src='favicon.svg' width={50} height={50} alt="" />
					<div className="middle">
						<Link href={`/`}>
							<p className="active">Главная</p>
						</Link>
						<Link href={`/`}><p>О проекте</p></Link>
						<Link href={`/`}><p>Наша команда</p></Link>
						<Link href={`/`}><p>Здесь о полезном</p></Link>
					</div>
					<div onClick={toggleBurger} className="burger">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				{burger ?
					<div className="menu" >
						<div className="close">
							<X onClick={toggleBurger} />
						</div>
						<Link href={`/`}>
							<p className="active" onClick={toggleBurger}>Главная</p>
						</Link>
						<Link href={`/`}><p onClick={toggleBurger}>О проекте</p></Link>
						<Link href={`/`}><p onClick={toggleBurger}>Наша команда</p></Link>
						<Link href={`/`}><p onClick={toggleBurger}>Здесь о полезном</p></Link>
					</div> : null
				}
			</header>

		</>

	);
};
