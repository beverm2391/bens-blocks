export default function Badge({ children }) {
    return (
        <div className='p-2 flex text-center rounded-lg px-3 py-[.4rem] bg-blue-300 text-blue-600 dark:bg-blue-600 dark:text-blue-100'>
            <p className="font-medium text-sm">{children}</p>
        </div>
    )
}