var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0684faf3-13be-44c6-9069-10d6e26a91d4', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: 0684faf3-13be-44c6-9069-10d6e26a91d4<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@10683d9d'},
{id: 'caf515bf-0744-4052-a52b-8732bd6247eb', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: caf515bf-0744-4052-a52b-8732bd6247eb<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@10683d9d'},
{id: '00577c8e-00a7-4ef8-a6ee-04a30d7e1545', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 00577c8e-00a7-4ef8-a6ee-04a30d7e1545<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@10683d9d'},
{id: '46c8fa86-3adb-4d31-8847-5da6bc504582', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 46c8fa86-3adb-4d31-8847-5da6bc504582<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@10683d9d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0684faf3-13be-44c6-9069-10d6e26a91d4', to: 'caf515bf-0744-4052-a52b-8732bd6247eb'},
{from: '00577c8e-00a7-4ef8-a6ee-04a30d7e1545', to: '0684faf3-13be-44c6-9069-10d6e26a91d4'},
{from: '46c8fa86-3adb-4d31-8847-5da6bc504582', to: '0684faf3-13be-44c6-9069-10d6e26a91d4'}
                            ]);