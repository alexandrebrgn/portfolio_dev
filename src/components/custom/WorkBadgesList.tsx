type WorkBadgeListType = {
    tags: string[]
}

export default function WorkBadgesList({ tags } : WorkBadgeListType) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags ? tags.map((tag) => (
                <div key={tag} className="bg-[var(--accent-regular)] h-min text-white py-1 px-4 border-1 border-none rounded-xl">
                    {tag}
                </div>
            )) : <div></div>}
        </div>
    )
}