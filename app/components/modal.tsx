'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted ? createPortal(<>{children}</>, document.querySelector('#screen') as HTMLSelectElement) : <></>;
}
