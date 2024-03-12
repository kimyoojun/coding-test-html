const eve = document.getElementById("d-day")

function dDays() {
    const christmasEve = new Date("2024-12-24")
    const today = new Date()

    const dDay = christmasEve - today

    const dDayDay = Math.floor(dDay / (1000*60*60*24))
    const dDayHour = Math.floor((dDay / (1000*60*60)) %24)
    const dDayMin = Math.floor((dDay / (1000*60)) % 60)
    const dDaySec = Math.floor(dDay / 1000 % 60)

    eve.innerText = dDayDay + "일" + dDayHour + "시간" + dDayMin + "분" + dDaySec + "초"
}

dDays()
setInterval(dDays, 1000)