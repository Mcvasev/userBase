import React, { PureComponent } from "react";

export default class Users extends PureComponent {

    props = {
        handleCreateUser: this.handleCreateUser
    }
    onSubmit = (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const data = [...formData.values()];
        const user = { name: data[0], age: +data[1], male: data[2] };
        this.props.handleCreateUser(user);
        evt.target.reset();
    };

    onClickSearch2 = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = [...formData.values()];
        console.log(e)
        const arr = this.props.arrUsersProps.filter((el) => {
            return el.name === data[0]
        });
        this.props.onClickSearch1(arr);
        e.target.reset();
    };
    

    render() {
        return (

            <div className="card-body">
                <h5 className="card-title">
                <form className="search" onSubmit={this.onClickSearch2}>    Пользователь
                    <input name="Имя" age="Возраст" male="пол" />
                    <button  type="submit">Поиск</button>
                </form>
                </h5>
                <hr />
                <div className="card-text">
                    <ul className="list-group">
                        <form
                            onSubmit={this.onSubmit}
                            className="card"
                            style={{ width: "18rem" }}
                        >
                            <input placeholder="Имя" className="list-group-item" name="name" />
                            <input type="number" placeholder="возраст" className="list-group-item" name="age" />
                            <input type="text" placeholder="пол" className="list-group-item" name="gender" />

                            <button type="submit" className="btn btn-success">
                                Создать пользователя
                            </button>

                        </form>
                        <hr />
                        <button onClick={this.props.onClickFiltrMale}>male</button>
                        <button onClick={this.props.onClickFiltrFemale}>female</button>
                    </ul>
                </div>
            </div>

        );
    }
}
