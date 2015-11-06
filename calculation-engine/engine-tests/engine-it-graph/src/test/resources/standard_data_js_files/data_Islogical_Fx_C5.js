var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '95a46d4c-625f-47e7-9ecf-a5b4fdbdc351', label: 'A1\nTRUE', color: '#31b0d5', title: 'Name: A1<br>Value: TRUE<br>Type: CELL_WITH_VALUE<br>Id: 95a46d4c-625f-47e7-9ecf-a5b4fdbdc351<br>Formula Expression: Formula String: A1; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3f92a84e'},
{id: '78586aa7-e3e0-469b-b757-4e7e754263fa', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 78586aa7-e3e0-469b-b757-4e7e754263fa<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: TRUE ISLOGICAL ; Ptgs: A1 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3f92a84e'},
{id: '3db90053-f4f8-4708-9e32-fb7208828f0e', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: 3db90053-f4f8-4708-9e32-fb7208828f0e<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3f92a84e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '95a46d4c-625f-47e7-9ecf-a5b4fdbdc351', to: '3db90053-f4f8-4708-9e32-fb7208828f0e'},
{from: '3db90053-f4f8-4708-9e32-fb7208828f0e', to: '78586aa7-e3e0-469b-b757-4e7e754263fa'}
                            ]);