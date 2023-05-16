import React from "react";
import Image from "../Image";
import sun from "../../img/sun.jpg";

const Sun = () => {
    return (
        <div className="content">
            <div className="content__text">
                <p><b>Солнце</b> — ближайшая к Земле звезда Солнечной системы и её главный компонент.</p>
                <p>70% его массы приходится на водород и 28% на гелий, но в нём также содержатся все известные химические элементы.<br/>
                Солнце почти в 110 раз больше Земли, а его масса в тысячу раз превосходит массу всех планет, вместе взятых.</p>
                <p>Именно благодаря солнечному свету и теплу на Земле существует жизнь. <br/>
                Строение Солнца удалось уточнить с помощью гелиосейсмологии (колебания поверхности Солнца – отзвук тех волн, которые распространяются в его глубинах). Атмосфера Солнца состоит из фотосферы, хромосферы и короны. </p>
            </div>
              <Image image={sun} />
        </div>
    )
}

export default Sun;