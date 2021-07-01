import { useState } from "react";
import styles from "../styles/Login.module.scss";

import Center from "../components/Layout/Center";
import { Helpers, NGO } from "../components/UI/Icons";
import Ngo from "../components/Login/Ngo";
import Volunteer from "../components/Login/Volunteer";

const Login = () => {
  const [Vlogin, setVlogin] = useState(true);
  const [Nlogin, setNlogin] = useState(true);

  return (
    <Center>
      <section className={styles.page}>
        <h1>Login Yourself</h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          eligendi est alias, temporibus optio sit nisi repellat laborum
          expedita culpa. Repudiandae odio vero rem, omnis aut perferendis qui
          unde totam excepturi culpa quasi repellat pariatur animi saepe nisi
          fuga nostrum, porro placeat eaque quia, minima aperiam accusantium
          voluptatum. Iure, itaque.
        </p> */}
        <section className={styles.login}>
          <div className={styles.volunteer}>
            <h1>Volunteer</h1>
            <Helpers />
            <div className={styles.content}>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, doloribus minima vero maiores ad nemo neque atque
                adipisci quod ratione perferendis dolores ipsa nobis, nam
                assumenda error, dolorum officia. Hic?
              </p> */}
              <Volunteer login={Vlogin} setLogin={setNlogin} />
            </div>
          </div>
          <div className={styles.ngo}>
            <h1>NGO</h1>
            <NGO />
            <div className={styles.content}>
              {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique cum laborum quo sapiente consectetur quaerat
                architecto neque, consequuntur totam perferendis fuga sint
                impedit, saepe quidem. Magni corrupti,
              </p> */}
              <Ngo login={Nlogin} setLogin={setVlogin} />
            </div>
          </div>
        </section>
      </section>
    </Center>
  );
};

export default Login;
