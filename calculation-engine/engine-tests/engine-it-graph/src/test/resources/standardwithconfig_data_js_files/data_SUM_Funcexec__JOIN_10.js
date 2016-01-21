var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1811', label: 'D2\n21.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 1811<br>Formula Expression: Formula String: SUM(A2:C2); Formula Values: SUM([[5.0, 7.0, 9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1812', label: 'A2:C2\n[[5.0, 7.0, 9.0]]', color: '#31b0d5', title: 'Name: A2:C2<br>Alias: null<br>Value: [[5.0, 7.0, 9.0]]<br>Type: RANGE<br>Id: 1812<br>Formula Expression: Formula String: A2:C2; Formula Values: [[5.0, 7.0, 9.0]]; Formula Ptg: [[5.0, 7.0, 9.0]]; Ptgs: A2:C2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1813', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 1813<br>Formula Expression: Formula String: SUM(A2:C2); Formula Values: SUM([[5.0, 7.0, 9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1814', label: 'D3\n20.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 1814<br>Formula Expression: Formula String: SUM(A3:C3); Formula Values: SUM([[8.0, 4.0, 8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1815', label: 'A3:C3\n[[8.0, 4.0, 8.0]]', color: '#31b0d5', title: 'Name: A3:C3<br>Alias: null<br>Value: [[8.0, 4.0, 8.0]]<br>Type: RANGE<br>Id: 1815<br>Formula Expression: Formula String: A3:C3; Formula Values: [[8.0, 4.0, 8.0]]; Formula Ptg: [[8.0, 4.0, 8.0]]; Ptgs: A3:C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1816', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 1816<br>Formula Expression: Formula String: SUM(A3:C3); Formula Values: SUM([[8.0, 4.0, 8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1817', label: 'D4\n9.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 1817<br>Formula Expression: Formula String: SUM(A4:C4); Formula Values: SUM([[1.0, 8.0, 0.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1818', label: 'A4:C4\n[[1.0, 8.0, 0.0]]', color: '#31b0d5', title: 'Name: A4:C4<br>Alias: null<br>Value: [[1.0, 8.0, 0.0]]<br>Type: RANGE<br>Id: 1818<br>Formula Expression: Formula String: A4:C4; Formula Values: [[1.0, 8.0, 0.0]]; Formula Ptg: [[1.0, 8.0, 0.0]]; Ptgs: A4:C4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1819', label: 'SUM\n9.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 9.0<br>Type: FUNCTION<br>Id: 1819<br>Formula Expression: Formula String: SUM(A4:C4); Formula Values: SUM([[1.0, 8.0, 0.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1820', label: 'D5\n15.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 1820<br>Formula Expression: Formula String: SUM(A5:C5); Formula Values: SUM([[7.0, 8.0, ]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1821', label: 'A5:C5\n[[7.0, 8.0, ]]', color: '#31b0d5', title: 'Name: A5:C5<br>Alias: null<br>Value: [[7.0, 8.0, ]]<br>Type: RANGE<br>Id: 1821<br>Formula Expression: Formula String: A5:C5; Formula Values: [[7.0, 8.0, ]]; Formula Ptg: [[7.0, 8.0, ]]; Ptgs: A5:C5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1822', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 1822<br>Formula Expression: Formula String: SUM(A5:C5); Formula Values: SUM([[7.0, 8.0, ]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1823', label: 'E6\nDEFINE', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 1823<br>Formula Expression: Formula String: DEFINE(SUM(A2:C2), VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(SUM([[5.0, 7.0, 9.0]]), #, 9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1825', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 1825<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1826', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1826<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1827', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1827<br>Formula Expression: Formula String: B2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1828', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 1828<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1829', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 1829<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1830', label: 'D2\n21.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 1830<br>Formula Expression: Formula String: SUM(A2:C2); Formula Values: SUM([[5.0, 7.0, 9.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1831', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 1831<br>Formula Expression: Formula String: DEFINE(SUM(A2:C2), VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(SUM([[5.0, 7.0, 9.0]]), #, 9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1832', label: 'F6\n21.0', color: '#31b0d5', title: 'Name: F6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 1832<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1834', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 1834<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1835', label: 'A2\n5.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 1835<br>Formula Expression: Formula String: A2; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1836', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1836<br>Formula Expression: Formula String: B2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1837', label: 'C2\n9.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 1837<br>Formula Expression: Formula String: C2; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1838', label: 'FUNCEXEC\n21.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 1838<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(9.0, 7.0, 5.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1839', label: 'E7\nDEFINE', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 1839<br>Formula Expression: Formula String: DEFINE(SUM(A3:C3), VALUE, C3, B3, A3, VALUE); Formula Values: DEFINE(SUM([[8.0, 4.0, 8.0]]), #, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1841', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 1841<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1842', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1842<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1843', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 1843<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1844', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1844<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1845', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 1845<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1846', label: 'D3\n20.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 1846<br>Formula Expression: Formula String: SUM(A3:C3); Formula Values: SUM([[8.0, 4.0, 8.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1847', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 1847<br>Formula Expression: Formula String: DEFINE(SUM(A3:C3), VALUE, C3, B3, A3, VALUE); Formula Values: DEFINE(SUM([[8.0, 4.0, 8.0]]), #, 8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1848', label: 'F7\n20.0', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 1848<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1850', label: 'VALUE\nDEVDEF_2', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_2<br>Type: CONSTANT_VALUE<br>Id: 1850<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_2; Formula Ptg: DEVDEF_2; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1851', label: 'A3\n8.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1851<br>Formula Expression: Formula String: A3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: A3 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1852', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 1852<br>Formula Expression: Formula String: B3; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: B3 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1853', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1853<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1854', label: 'FUNCEXEC\n20.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 1854<br>Formula Expression: Formula String: FUNCEXEC(C3, B3, A3, VALUE); Formula Values: FUNCEXEC(8.0, 4.0, 8.0, DEVDEF_2); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1855', label: 'E8\nDEFINE', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 1855<br>Formula Expression: Formula String: DEFINE(SUM(A4:C4), VALUE, C4, B4, A4, VALUE); Formula Values: DEFINE(SUM([[1.0, 8.0, 0.0]]), #, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1857', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 1857<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1858', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1858<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1859', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1859<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1860', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 1860<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1861', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 1861<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1862', label: 'D4\n9.0', color: '#31b0d5', title: 'Name: D4<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 1862<br>Formula Expression: Formula String: SUM(A4:C4); Formula Values: SUM([[1.0, 8.0, 0.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1863', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 1863<br>Formula Expression: Formula String: DEFINE(SUM(A4:C4), VALUE, C4, B4, A4, VALUE); Formula Values: DEFINE(SUM([[1.0, 8.0, 0.0]]), #, 0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1864', label: 'F8\n9.0', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 1864<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1866', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: 1866<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1867', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1867<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1868', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1868<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1869', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 1869<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1870', label: 'FUNCEXEC\n9.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 9.0<br>Type: FUNCTION<br>Id: 1870<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1871', label: 'E9\nDEFINE', color: '#31b0d5', title: 'Name: E9<br>Alias: null<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 1871<br>Formula Expression: Formula String: DEFINE(SUM(A5:C5), VALUE, C5, B5, A5, VALUE); Formula Values: DEFINE(SUM([[7.0, 8.0, ]]), #, , 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1873', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 1873<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1874', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1874<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1875', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1875<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1876', label: 'C5\n', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1876<br>Formula Expression: Formula String: C5; Formula Values: ; Formula Ptg: ; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1877', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 1877<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1878', label: 'D5\n15.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 1878<br>Formula Expression: Formula String: SUM(A5:C5); Formula Values: SUM([[7.0, 8.0, ]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1879', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Alias: null<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 1879<br>Formula Expression: Formula String: DEFINE(SUM(A5:C5), VALUE, C5, B5, A5, VALUE); Formula Values: DEFINE(SUM([[7.0, 8.0, ]]), #, , 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1880', label: 'F9\n15.0', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 1880<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1882', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 1882<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1883', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 1883<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1884', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1884<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1885', label: 'C5\n', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 1885<br>Formula Expression: Formula String: C5; Formula Values: ; Formula Ptg: ; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'},
{id: '1886', label: 'FUNCEXEC\n15.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 15.0<br>Type: FUNCTION<br>Id: 1886<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@d611f1c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1818', to: '1819'},
{from: '1830', to: '1831'},
{from: '1846', to: '1847'},
{from: '1862', to: '1863'},
{from: '1878', to: '1879'},
{from: '1884', to: '1821'},
{from: '1834', to: '1838'},
{from: '1850', to: '1854'},
{from: '1866', to: '1870'},
{from: '1882', to: '1886'},
{from: '1843', to: '1815'},
{from: '1826', to: '1831'},
{from: '1842', to: '1847'},
{from: '1858', to: '1863'},
{from: '1874', to: '1879'},
{from: '1835', to: '1812'},
{from: '1876', to: '1821'},
{from: '1868', to: '1818'},
{from: '1827', to: '1812'},
{from: '1860', to: '1818'},
{from: '1831', to: '1823'},
{from: '1847', to: '1839'},
{from: '1863', to: '1855'},
{from: '1879', to: '1871'},
{from: '1852', to: '1815'},
{from: '1819', to: '1817'},
{from: '1885', to: '1821'},
{from: '1815', to: '1816'},
{from: '1835', to: '1838'},
{from: '1851', to: '1854'},
{from: '1867', to: '1870'},
{from: '1883', to: '1886'},
{from: '1844', to: '1815'},
{from: '1827', to: '1831'},
{from: '1843', to: '1847'},
{from: '1859', to: '1863'},
{from: '1875', to: '1879'},
{from: '1836', to: '1812'},
{from: '1869', to: '1818'},
{from: '1828', to: '1812'},
{from: '1822', to: '1878'},
{from: '1853', to: '1815'},
{from: '1816', to: '1814'},
{from: '1812', to: '1813'},
{from: '1836', to: '1838'},
{from: '1852', to: '1854'},
{from: '1868', to: '1870'},
{from: '1884', to: '1886'},
{from: '1828', to: '1831'},
{from: '1844', to: '1847'},
{from: '1860', to: '1863'},
{from: '1876', to: '1879'},
{from: '1837', to: '1812'},
{from: '1874', to: '1821'},
{from: '1819', to: '1862'},
{from: '1858', to: '1818'},
{from: '1813', to: '1811'},
{from: '1816', to: '1846'},
{from: '1821', to: '1822'},
{from: '1837', to: '1838'},
{from: '1853', to: '1854'},
{from: '1869', to: '1870'},
{from: '1885', to: '1886'},
{from: '1829', to: '1831'},
{from: '1845', to: '1847'},
{from: '1861', to: '1863'},
{from: '1877', to: '1879'},
{from: '1883', to: '1821'},
{from: '1842', to: '1815'},
{from: '1825', to: '1831'},
{from: '1841', to: '1847'},
{from: '1857', to: '1863'},
{from: '1873', to: '1879'},
{from: '1875', to: '1821'},
{from: '1867', to: '1818'},
{from: '1813', to: '1830'},
{from: '1826', to: '1812'},
{from: '1859', to: '1818'},
{from: '1838', to: '1832'},
{from: '1854', to: '1848'},
{from: '1870', to: '1864'},
{from: '1886', to: '1880'},
{from: '1851', to: '1815'},
{from: '1822', to: '1820'}
                            ]);