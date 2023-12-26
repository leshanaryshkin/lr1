import React, {useState} from 'react';
import {Button, Select} from "@mui/material";
import {MenuItem} from "@mui/material";
import {TextField} from "@mui/material";

const ContactsBlock = () => {
    const [selectedTheme, setSelectedTheme] = useState("")
    const handleChange = (event) => {
        setSelectedTheme(event.target.value);
    };
    return (
        <div>
            <section className="contacts-info" id="contacts">
                <article className="contacts_inner">
                    <div className="contacts container">
                        <h2 className="types-blocks-header">Контакты</h2>
                        <div className="contacts-form-wrap">
                            <form method="POST">
                                <div className="contacts-form">
                                    <div className="contacts-user-info">
                                        <div className="">
                                            <label htmlFor="">Имя</label>

                                            <TextField
                                                required

                                                id="standard-basic"
                                                variant="standard"
                                                sx={{
                                                    marginLeft: '15px',
                                                }
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Фамилия</label>
                                            <TextField
                                                required

                                                id="standard-basic"
                                                variant="standard"
                                                sx={{
                                                    marginLeft: '15px',
                                                }
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Телефон</label>
                                            <TextField
                                                required

                                                id="standard-basic"
                                                variant="standard"
                                                sx={{
                                                    marginLeft: '15px',
                                                }
                                                }
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="">Почта</label>
                                            <TextField
                                                required

                                                id="standard-basic"
                                                variant="standard"
                                                sx={{
                                                    marginLeft: '15px',
                                                }
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="contacts-form-textarea">
                                            <label htmlFor="">Тема обращения</label>
                                            <Select
                                                sx={{
                                                    '& fieldset': {},
                                                    width: '300px',
                                                    height: '40px',
                                                    fontSize: '15px',
                                                }}
                                                labelId="demo-simple-select-label"
                                                id="my-select"
                                                value={selectedTheme}
                                                onChange={handleChange}
                                            >

                                                <MenuItem value={1}>Потенциальный клиент</MenuItem>
                                                <MenuItem value={2}>Запрос от СМИ</MenuItem>
                                                <MenuItem value={3}>Запрос по аналитике</MenuItem>
                                                <MenuItem value={4}>Карьера</MenuItem>
                                                <MenuItem value={5}>Технологическое партнерство</MenuItem>
                                                <MenuItem value={6}>Вопрос по работе сайта</MenuItem>
                                                <MenuItem value={7}>Другое</MenuItem>
                                            </Select>
                                        </div>
                                        <div className="contacts-form-textarea">
                                            <label htmlFor="">Сообщение</label>
                                            <textarea name="" id="" rows="4"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant={"outlined"}
                                    sx={{
                                        alignSelf:"center",
                                        display:"block",
                                        margin:"0 auto",
                                        marginTop:"20px",
                                    }}
                                >Отправить</Button>
                            </form>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default ContactsBlock;