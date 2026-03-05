export default function StarRating({ rate }: { rate: number }) {
    return (
        <div className="flex items-center gap-1 mt-4">
            <div className="flex">
                {[1, 2, 3, 4, 5].map(i => {
                    const fill = Math.min(1, Math.max(0, rate - (i - 1)));
                    return (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24">
                            <defs>
                                <clipPath id={`star-fill-${rate}-${i}`}>
                                    <rect x="0" y="0" width={`${fill * 100}%`} height="100%" />
                                </clipPath>
                            </defs>
                            <polygon
                                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                                fill="#e5e7eb"
                                stroke="#e5e7eb"
                                strokeWidth="1"
                            />
                            <polygon
                                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                                fill="#fbbf24"
                                stroke="#fbbf24"
                                strokeWidth="1"
                                clipPath={`url(#star-fill-${rate}-${i})`}
                            />
                        </svg>
                    );
                })}
            </div>
            <span className="text-xl">{rate}</span>
        </div>
    );
}