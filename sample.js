
ej.base.enableRipple(true);

var grid = new ej.grids.Grid({
    dataSource: employeeData,
    toolbar: ['PdfExport', 'ExcelExport', 'CsvExport'],
    allowPdfExport: true,
    allowExcelExport: true,
    toolbarClick: toolbarClick,
    pdfExportComplete: pdfExportComplete,
    excelExportComplete: excelExportComplete,
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 200 },
        { field: 'LastName', headerText: 'Last Name', width: 200 },
        { field: 'Title', headerText: 'Title', width: 200 },
        { field: 'Country', headerText: 'Country', width: 200 },
    ],
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport(null, false, null, true);
    }
    if (args.item.id === 'Grid_csvexport') {
        grid.csvExport(null, false, null, true);
    }
    if (args.item.id === 'Grid_pdfexport') {
        this.pdfExport(null, false, null, true);
    }
}

function pdfExportComplete(args) {
    args.promise.then((e) => {
        console.log('pdf export', e.blobData);
        alert("blob data logged in the console");
    });
}

function excelExportComplete(args) {
    args.promise.then((e) => {
        console.log(e.blobData.type.indexOf('csv') > -1 ? 'csv export' : 'excel export', e.blobData);
        alert("blob data logged in the console");
    });
}