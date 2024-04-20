export default function TableHead({ datas }) {
    return (
        <thead className="bg-primary-100 text-white uppercase text-center font-medium">
            <tr>
                {datas.map((data, index) => {
                    return (
                        <td key={index} scope="col" className="px-6 py-4">
                            {data}
                        </td>
                    );
                })}
            </tr>
        </thead>
    );
}
