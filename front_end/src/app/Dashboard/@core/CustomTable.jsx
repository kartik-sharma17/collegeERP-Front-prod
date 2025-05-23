import { DataTable } from 'primereact/datatable';
import './css/table.scss'

export const CustomTable = (props) => {
    let { value, rows, visiblepaginator, addClass, hideHeader } = props;
    return (
        <DataTable
            emptyMessage="No Data found."
            value={value}
            paginator={visiblepaginator}
            rows={rows}
            {...props}
            pt={{
                headerCell: { className: 'text-center' },
                headerRow: { className: `bg-green-300 ${hideHeader ? "hidden" : ""}` },
                root: { className: "border-1 border-gray-300 overflow-hidden" },
            }}
            className={`text-sm font-normal border-round-md overflow-hidden customTable ${addClass ? { addClass } : ""}`}
        >
            {props.children}
        </DataTable>
    );
};
