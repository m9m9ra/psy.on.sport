"use client";
// @ts-ignore
import { ArrowLeft, ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
// import '../sass/nav.css';
import styles from './../sass/nav.module.scss';
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
			<header ref={ref} className={styles.navbar}>
				<div className={styles.layout}>
					<Image src='favicon.svg' width={50} height={50} alt="" />
					<div className={styles.middle}>
						<Link href={`/`}>
							<p className={styles.active}>Главная</p>
						</Link>
						<Link href={`/`}><p>О проекте</p></Link>
						<Link href={`/`}><p>Наша команда</p></Link>
						<Link href={`/`}><p>Здесь о полезном</p></Link>
					</div>
					<div onClick={toggleBurger} className={styles.burger}>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				{burger ?
					<div className={styles.menu} >
						<div className={styles.close}>
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
