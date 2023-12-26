import React from 'react';

const Services = () => {
    return (
        <div>
            <section className="services-sect" id="services">
                <div className="services container">
                    <h2 className="types-blocks-header">Что мы предлагаем</h2>
                    <div className="create-line"></div>
                    <div className="services-info">
                        <div className="services-info-about">
                            <p>
                                Компания ТД «Инфогаз» предлагает широкий комплекс услуг и решений по обеспечению
                                информационной безопасности, за счет самых передовых решений в области
                                информационной безопасности, большого практического опыта и компетенций
                                специалистов. Мы обладаем всеми необходимыми лицензиями, позволяющими предлагать
                                следующие услуги в области ИБ:
                            </p>
                        </div>
                        <div className="services-wrap">
                            <div className="services-item"><img src="/images/services/8.jpg" alt=""/><p>Проектирование системы информационной безопасности</p></div>
                            <div className="services-item"><img src="/images/services/2.jpg" alt=""/> <p>Защита персональных данных</p></div>
                            <div className="services-item"><img src="/images/services/9.jpg" alt=""/><p>Поставка, установка и настройка средств защиты информации</p></div>
                            <div className="services-item"><img src="/images/services/1.jpg" alt=""/><p>Проведение работ по аттестации на соответствие требованиям ИБ</p></div>
                            <div className="services-item"><img src="/images/services/3.jpg" alt=""/><p>Соответствие требованиям стандартов по ИБ</p></div>
                            <div className="services-item"><img src="/images/services/10.jpg" alt=""/><p>Построение инфраструктуры открытых ключей – PKI (Удостоверяющий
                                        центр)</p></div>
                            <div className="services-item"><img src="/images/services/4.jpg" alt=""/><p>Консалтинг, экспертная поддержка и аутсорсинг систем ИБ</p></div>
                            <div className="services-item"><img src="/images/services/11.jpg" alt=""/><p>Консалтинг и подготовка к получению лицензий ФСТЭК и ФСБ России</p></div>
                            <div className="services-item"><img src="/images/services/12.jpg" alt=""/><p>Аренда контрольно-измерительной аппаратуры</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;