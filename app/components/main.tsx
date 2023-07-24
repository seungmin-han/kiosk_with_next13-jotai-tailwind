import KioskLayout from "../layouts/kiostLayout"

const screenClassName: String = 'text-center justify-between';

export default function Main() {
    return (
        <KioskLayout screenClassName={screenClassName}>
            <h1 className="text-8xl mt-32">Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ratione quis, deleniti similique earum magnam illo est architecto eum id odit consectetur cumque itaque necessitatibus optio reiciendis, rerum maxime? Exercitationem.</p>
            <button className="mb-32 font-bold">클릭해주세요.</button>
        </KioskLayout>
    )
}