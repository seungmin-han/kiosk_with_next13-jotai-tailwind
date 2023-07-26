'use client'
import { useRouter } from "next/navigation";
import KioskLayout from "../layouts/kiostLayout"

const screenClassName: String = 'text-center justify-between';

export default function Main() {
    const router = useRouter()
    return (
        <KioskLayout screenClassName={screenClassName}>
            <h1 className="text-8xl mt-32">Kiosk</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ratione quis, deleniti similique earum magnam illo est architecto eum id odit consectetur cumque itaque necessitatibus optio reiciendis, rerum maxime? Exercitationem.</p>
            <button className="mb-32 font-bold transition hover:scale-105" onClick={() => router.push('/menu')}>터치하여 메뉴 선택으로 이동</button>
        </KioskLayout>
    )
}