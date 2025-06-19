import Link from "next/link";
import React, { useEffect } from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import './sass/index.css'
import Image from "next/image";

const navigation = [
	{ name: "Blog", href: "/blog" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];
// @ts-ignore
export default function Home() {
	return (
		<div className="index">
			<div className="layoutTop">
				<div className="content">
					<div className="left">
						<h1 className="animated animatedFadeInUp fadeInUp">
							Индивидуальная <br />консультация<br /> спортивного психолога
						</h1>
						<button className="animated15 animatedFadeInUp fadeInUp">
							Записаться
						</button>
						<p className="animated2 animatedFadeInUp fadeInUp">
							Мы верим, что успех в <span style={{
								color: '#FFD500'
							}}>спорте</span> — это не только физическая подготовка, но и сильный характер, уверенность, психологическая и ментальная стойкость спортсмена.
							<span style={{
								color: '#FF3380'
							}}>
								Спортивный психолог
							</span>
							может  помочь разобраться в себе, найти ресурсы и преодолеть внутренние барьеры и убеждения
						</p>
					</div>
					<Image className="animated15 animatedFadeInUp fadeInUp" width={541} height={361} src={'main_img.png'} alt={''} />
				</div>
			</div>
			<div className="animated2 animatedFadeInUp fadeInUp" style={{
				paddingTop: 36,
				color: '#FFBDD6',
				fontSize: 36
			}}>

				{
					// @ts-ignore
					<marquee direction="right"
						truespeed
						scrollamount="12">
						поддержка поддержка поддержка поддержка поддержка поддержка
						поддержка поддержка поддержка поддержка поддержка поддержка
						поддержка поддержка поддержка поддержка поддержка поддержка
						поддержка поддержка поддержка поддержка поддержка поддержка
						поддержка поддержка поддержка поддержка поддержка поддержка
						{/* @ts-ignore */}
					</marquee>
				}
			</div>
			<div className="layoutPink">
				<h2 style={{
					color: 'white'
				}}>Многие считают, что...</h2>
				<p className="first">
					Успех в спорте зависит преимущественно от физических усилий,
					но в
					{/* <br /> */}
					действительности побеждает тот, кто психологически более
					{/* <br /> */}
					подготовлен.
				</p>
				<p>
					<span style={{
						color: "#FF88B5"
					}}>
						«В борьбе равных соперников побеждает психология»
					</span>
					<br />основоположник олимпийского движения Пьер де Кубертен
				</p>
			</div>
			<div style={{
				height: 1000
			}}>

			</div>
		</div>
	);
}
