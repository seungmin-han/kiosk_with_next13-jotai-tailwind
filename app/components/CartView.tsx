'use client';

import { cartAtom } from '@/store/atoms';
import { CartProduct, Product } from '@/types';
import { useAtom } from 'jotai';

export default function CartView(props: { close: () => void }) {
	const realPrice = (v: Product | CartProduct) => {
		if (!v) return 0;
		const total = v.price * ((100 - v.sale) / 100);
		return 'optionPrices' in v ? (total + v.optionPrices.reduce((acc, val) => acc + val, 0)) * v.count : total;
	};
	const [cart, setCart] = useAtom(cartAtom);
	return (
		<div
			className="absolute w-full h-full bg-opacity-30 bg-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center p-20 overflow-hidden"
			onClick={() => props.close()}
		>
			<div
				className="bg-white w-full h-full rounded-lg flex flex-col justify-between overflow-hidden shadow-lg"
				onClick={e => e.stopPropagation()}
			>
				<div className="flex flex-col">
					<div
						className="self-end w-6 h-6 box-border text-center cursor-pointer"
						onClick={() => props.close()}
					>
						X
					</div>
					<h2 className="text-xl pt-4 text-center">주문내역</h2>
					<div className="flex flex-col pt-6 max-h-[480px] overflow-y-auto">
						{cart.map((item, index) => {
							return (
								<div
									key={index}
									className="flex flex-row justify-between px-4 py-6 first:border-t-2 border-b-2 border-slate-100"
								>
									<div>
										<div>
											{item.name} x {item.count}
										</div>
										<div className="pl-4">
											{item.selectedOptions.map((option, i) => {
												return <div key={i}>{option}</div>;
											})}
										</div>
									</div>
									<div>{realPrice(item)}원</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex flex-col">
					<div className="px-4 py-6 text-right">
						수량: {cart.reduce((acc, cur) => acc + cur.count, 0)}개<br />
						결제 금액: {cart.reduce((acc, cur) => acc + realPrice(cur), 0)}원
					</div>
					<button className="w-full text-center p-6 text-xl font-bold bg-sky-500 text-white">결제하기</button>
				</div>
			</div>
		</div>
	);
}
