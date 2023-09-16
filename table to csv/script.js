class csvexport{
    constructor(table,header=true){
     this.table=table
     this.rows=Array.from(table.querySelectorAll("tr"))
     if(!header && this.rows[0].querySelectorAll("th").length){
         this.rows.shift();
     }
    }
    exportcsv(){
        let lines=[]
        let line=""
        const ncols=this._longestRow()
        for(const row of this.rows){
            line=""
            for(let i=0;i<ncols;i++){
             if(row.children[i]!==undefined){
                if(i<row.childElementCount-1){
                    line+=csvexport.safedata(row.children[i])+","
                }
                else{
                    line+=csvexport.safedata(row.children[i])
                }
             }
            }
        lines.push(line)
        }
       return lines.join('\n')
    }
    _longestRow() {
        return this.rows.reduce((length,row)=>(
              row.childElementCount >length ?row.childElementCount:length
        ), 0);
     }
     static safedata(td){
        let data=td.textContent
        data=data.replace(/"/g,`""`)
        data=/[",\n"]/.test(data) ? `${data}`:data
        return data
     }
}
const bntExport=document.getElementById('btn-export')
const tableElement=document.getElementById('table')
bntExport.addEventListener('click',()=>{
    const obj=new csvexport(tableElement)
    const csvdata=(obj.exportcsv())
    const blob=new Blob([csvdata],{type:"text/csv"})
    console.log(blob)
    const url=URL.createObjectURL(blob)
    const a=document.createElement('a')
    a.href=url;
    a.download="file.csv"
    a.click()
    setTimeout(()=>{
        URL.revokeObjectURL(url)
    },500)
})