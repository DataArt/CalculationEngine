var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd400dcdc-9da7-4c18-9573-9c48dc6d88ce', label: 'D9\nFALSE', color: '#31b0d5', title: 'Name: D9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: d400dcdc-9da7-4c18-9573-9c48dc6d88ce<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@440eaa07'},
{id: '0779779e-7b91-40ed-84eb-6856696ff5b6', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 0779779e-7b91-40ed-84eb-6856696ff5b6<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@440eaa07'},
{id: '99bd2922-e5f0-4e06-ba4d-74bd5e80ee3f', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 99bd2922-e5f0-4e06-ba4d-74bd5e80ee3f<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@440eaa07'},
{id: '1e609291-3063-4137-a2ef-e4b00efcbbf1', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1e609291-3063-4137-a2ef-e4b00efcbbf1<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@440eaa07'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '99bd2922-e5f0-4e06-ba4d-74bd5e80ee3f', to: 'd400dcdc-9da7-4c18-9573-9c48dc6d88ce'},
{from: '0779779e-7b91-40ed-84eb-6856696ff5b6', to: '99bd2922-e5f0-4e06-ba4d-74bd5e80ee3f'},
{from: '1e609291-3063-4137-a2ef-e4b00efcbbf1', to: '0779779e-7b91-40ed-84eb-6856696ff5b6'}
                            ]);