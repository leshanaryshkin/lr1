import React from 'react';
import {useState} from "react";
const AboutBlock = () => {
    const [isClosed, setIsClosed] = useState(true);

    const handleClick = (event) => {
        event.preventDefault()
        setIsClosed(!isClosed);
    };
    return (
        <div>
            <section className="about-us_sect" id="about-us">
                <article className="about-us_inner">
                    <div className="about-us container">
                        <h2 className="types-blocks-header">О компании</h2>
                        <div className="create-line"></div>
                        <div className="about-us_wrap">
                            <div className="about-us_info">
                                <p>
                                    ТД «Инфогаз» – российская компания, предоставляющая комплексные решения в области информационной безопасности. Компания ведет свою деятельность на российском рынке информационных технологий начиная с 2007 года.
                                </p>
                            </div>
                            <div className="about-us_picture">
                                <img src="/images/about.jpg" alt=""/>
                            </div>
                        </div>
                            <div>
                                <div className="slider-wrap">
                                    <div className="slider-wrap-link">
                                        <a href="#" onClick={handleClick} className={`slider-link ${isClosed ? '' : 'active'}`}>
                                            <span className="arrow-icon"></span>
                                            {isClosed ? "Подробнее":"Свернуть"}
                                        </a>
                                    </div>
                                    <div className={`slider-content ${isClosed ? '' : 'open'}`}>
                                        <p>
                                            Руководство ТД «Инфогаз» и руководители ведущих подразделений имеют специальное
                                            образование и большой практический опыт организации работ по защите информации.
                                            Специалисты компании имеют большой опыт в подготовке организаций к проверкам, проводимым
                                            регуляторами рынка, что обеспечивает нашим заказчикам успешное прохождение такого рода
                                            проверок.
                                        </p>
                                        <p>
                                            Основные направления деятельности – разработка, внедрение и поддержка систем информационной безопасности, аудит информационных систем на соответствие требованиям по безопасности, защита персональных данных, консалтинг в сфере защиты информации.
                                        </p>
                                        <p>
                                            ТД «Инфогаз» – надежный партнер на рынке информационных технологий и информационной безопасности. Клиентами компании являются государственные и коммерческие организации, банки, предприятия нефтегазового сектора, энергетической и телекоммуникационной отраслей. Компания придерживается принципа индивидуального подхода к своим клиентам, для некоторых из них реализованы специализированные решения.
                                        </p>
                                            ТД «Инфогаз» обладает всеми необходимыми лицензиями в области защиты информации. В компании действует система контроля качества, отвечающая международным стандартам.
                                        <p>
                                            Стратегической целью является становление компании ТД «Инфогаз» как лидера среди интеграторов сегмента информационной безопасности посредством освоения новых рынков и реализации инновационных решений.
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>

                </article>
                <article className="about-us_clients_info">
                    <div className="about-us_clients container">
                        <h2 className="types-blocks-header">Наши клиенты</h2>
                        <div className="create-line"></div>
                        <div className="about-us_clients_inner">
                            <div className="about-us_clients_images"><img src="/images/clients/2.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/4.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/5.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/6.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/8.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/9.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/11.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/13.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/gpa.png" alt=""/></div>
                            <div className="about-us_clients_images"><img src="/images/clients/logo-ibs.png" alt=""/>
                            </div>
                            <div className="about-us_clients_images"><img src="/images/clients/logo-alfa.png" alt=""/>
                            </div>
                            <div className="about-us_clients_images"><img src="/images/clients/sst.png" alt=""/></div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default AboutBlock;