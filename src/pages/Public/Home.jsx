// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from "@components/public/Header.jsx";
import Footer from "@components/public/Footer.jsx";

const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="mb-auto md:pt-32 container mx-auto">
                <main>
                    <section>
                        <h1>LES ARTS MARTIAUX AU JAPON.</h1>
                        <h2>L'histoire des arts martiaux au Japon est étroitement lié à l'histoire du pays.</h2>
                        <article>
                            <h3>
                                Plusieurs périodes ont marqué le développement des arts martiaux qui ont été influencé par les
                                relations politiques et militaires entre différentes régions du Japon ainsi que par Les échanges
                                culturels avec la Chine et la Corée.
                            </h3>
                            <h4>
                                Période <a href="https://www.japan-guide.com/e/e2133.html"
                                           target="_blank">Kamakura</a> (1185-1333) et période <a
                                href="https://www.japan-guide.com/e/e2134.html" target="_blank">Muromachi</a> (1333-1573).
                            </h4>
                            <p>Les <a href="https://www.japan-guide.com/e/e2127.html" target="_blank">samouraïs</a> étaient la
                                classe guérrière dominante et les arts martiaux faisaient partie
                                intégrante de leur formation et de leur culture.<br/>
                                Les écoles d'escrime (<a href="https://shinkanryu.org/fr/quest-ce-que-le-kenjutsu/"
                                                         target="_blank">kenjutsu</a>) et les écoles de jiu-jitsu (<a
                                    href="https://www.fscfrance.fr/disciplines-sportives/ju-jutsu-traditionnel/#:~:text=Art%20martial%20japonais%2C%20assimil%C3%A9%20%C3%A0,principe%20g%C3%A9n%C3%A9ral%20d%C3%A9nomm%C3%A9%20%22Ju%22."
                                    target="_blank">jujutsu</a>) se sont développées à cette époque, chacune avec ses propres
                                techniques et philosophies.<br/>
                                Les samouraïs ont également adopté des codes de conduite et de morale, tels que le bushido, qui
                                ont influencé la pratique des arts martiaux et leur perception dans la société japonaise.
                            </p>
                            <h4>La période <a href="https://www.worldhistory.org/Sengoku_Period/"
                                              target="_blank">Sengoku</a> (milieu du 15e siècle - fin du 16e siècle)
                            </h4>
                            <p>a été
                                marquée par des guerres
                                incessantes entre les seigneurs de guerre rivaux. Les arts martiaux ont joué un rôle crucial sur
                                les champs de bataille de cette époque.
                            </p>
                            <h4>
                                La période <a href="https://www.japan-guide.com/e/e2128.html"
                                              target="_blank">Edo</a> (1603-1868)
                            </h4>
                            <p>a vu l'établissement de la paix intérieure
                                sous le shogunat <a href="https://www.japanpitt.pitt.edu/timeline/tokugawa-period-1603-1868"
                                                    target="_blank">Tokugawa</a>.
                                Les arts martiaux ont été codifiés et enseignés dans des écoles officielles (ryuha) et sont
                                devenus une forme d'éducation physique et morale.
                            </p>
                            <h4>
                                Les arts martiaux ont continué à évoluer pendant la période <a
                                href="https://www.japan-guide.com/e/e2130.html" target="_blank">Meiji</a> (1868-1912),
                            </h4>
                            <p>avec
                                l'ouverture
                                du Japon à l'Occident et l'introduction de nouvelles influences et techniques.

                            </p>
                            <h4>
                                Au 20e siècle,
                            </h4>
                            <p>
                                de nombreuses formes d'arts martiaux japonais ont été modernisées et transformées
                                en sports de compétition, notamment le judo, le karaté et le kendo.
                            </p>
                        </article>
                    </section>
                    <aside>
                        uuyghhghg
                    </aside>
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
