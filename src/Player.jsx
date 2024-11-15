
import Cards from "./Cards"

export default ()=>{
    return (
        <>
<header>
    <nav className="flex items-center justify-around p-4 ">
        <div className="flex items-center justify-center flex-col">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABQJJREFUaEPtmXnIblMUh59L4prnIZm5CkXmOTNXZhKKZE5kSoYIZQqZMhPddIsyJTKWeaaQISEUMvOHWYbzaJ+v8532Pvvs877SV3fV+8+711p7/fZee01nGlOcpk1x+5kD4P++wXHewLbA/sD6wKLht3QA+BXwQ/i9BtwJPDUO8KMCWB44GTgYWKrQoK+B24HLgc8KZSfYhwLwZM8CjgLmHbp5kPsNuAE4H/imVNcQAMcBlwLzlW6W4f8FOAG4uURvKYAbw6nH9vgV+AlYImPAt9UBLNBxANdWN+Eh9aK+ABYDHgA2j2j9pHqwVwK3Bne6Cdgrsft94QB0m8OAkyq5FSO8TwN7hkffCaQvgEeBHSOajgG8lTYdAFwHCFz6HjgWuCOh4/rI/+65c+4a+gC4EDijpUiDdgOe79jAqHRLWD8CMOqkyJv1hmvANZ8P++wuEDkAXqPX3qT3K8N3Aj7OnU7h+mqVi3rqq7bkPKgHU7q6ACwcjGyeimFuo//A+Nq+VQATXXNPb25l4OcYiC4AlwGnNIR8eFtWrvNq4cmWsm8BPAHM0xC8OOLG/y6nAKwE6CpNJedVAueWWjOQ/wLgzNbh6Vqft/WlAJgZj24wW8vooz8ONKhUbCHgo1ZOuQY4vi8AkS7XYH4E2KXQiumAm0omJjNtCbVD96fACn0AbJDw8/WAN3pasEMwfs3A/14A8XhP+XWrZPh6hHcd4O3m/zEXOifh6w8Bu/YwICWvaN935I0bqtt0GnBJDoBx3/gfo00qEC8n1jxtXcbT7yJvQZfyVmK0MfBSYs1MfmAOwIuAhsbIzWMlhXWNxuv3fcj3IAjrpzbZ6GydUGJ43S4HwAxrGI3RrCqJHRpZ8FZMcCX0CuBpt8k9DkkoegdYOwfg91b8r/nNCz7kWEa0qrSzKiE7uSsiAvOHB7xGZM1SfMkhAKz1N2xHgIaiZYAvSqyvurBlgS8TMp6yGb/dNFnKTGpdY1Eo5kK2jrlO6S5g354g7gb2y/BaqrfL7DcBQ+wExQC8AGza4LkX2KeHYRoviD6k8YLI0T1V7tm7wfRwFaFm5gC0T/LEqjq8KrdTWNeNdKcu0m10nz7k3s13Yn9xZA5A+0Ea1rbps1t4yMp3kQb5gPvQM6ECrnmNgEapCYq50IxWkvk7PBwjQI4MpalEV8saOg2hOVo8jFlqG7XDcc6k0UuqGv0gVJ/1Jiaq23I7jnndatiquCYT7GbtPVIAbCCsO2p6F1hrzAbm1Jl3Vm8wnQrYZE2iFABnO5avzTic7IpylgxYt2DT4Jq+C+MX5069AMh0EXB6g/vPkMxiZe4AG5MiZnuT2NwNDid2V8ckunriRcLQ1SlaFxmhhk6albVA6yI9wXbyj1IA8h8EzM5s8GQFwNH6EOqqfNX3V9DtpC5KubmQQu3pREyRmTtVw6f2tm94LIPaoZbDrST1ATBXuOZUja7yIbeQO317D7sy4/9IABT2i4vTsdhwt1a+VdWNPdvTj2yKbNpTpJ7dxzncrTcymcUamnpdo/xZEFrzfFi54IKhPrL+MRF5qrGurtZhl3Z4z4MY9JXS+GxO0LXGST5YdRc1Rn3eQMxIY7VpPtU7lwJ7rmqIrP/fKhUcCqDeZ4/wray0H67lLeqMMveXGl7zjwqg1mPpsX34ZuB4peszq+MUvwUYZSwRRqJxARjJiFGE5wAY5fTGITvlb+AfZR3dMUD01AEAAAAASUVORK5CYII="/>
        <p className="text-4xl font-bold">FC 25</p>
        <p className="text-xl"> Ultimate team</p>
        </div>
        <div className="flex items-center justify-center flex-row gap-4">
            <button className="bg-black rounded-lg items-center flex text-white font-bold p-4 hover:bg-gray-600 transition-color duration-200" >Build you team</button>
            <button className="bg-orange-700 rounded-lg flex items-center p-4 text-white font-bold hover:bg-orange-400 transition-all duration-200">Browse packs</button>
        </div>
    </nav>
</header>
<body>
    <div className="flex items-center justify-center flex-col  m-auto">
        <img className="h-screen w-screen" src="https://sm.ign.com/t/ign_nordic/news/f/fc-25-ulti/fc-25-ultimate-edition-cover-features-jude-bellingham-david_2c33.1200.jpg" alt="" />
<div>
    <p className="text-8xl font-bold hover:text-orange-500 transition-all duration-200 tracking-wide m-10">Build Your team !</p>
    <div className="grid grid-cols-3 gap-4">
    <Cards image="https://i.guim.co.uk/img/media/43029890619d4053c5ed632bef40d78f4c2f4478/0_219_3305_1984/master/3305.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=285068e10fd3cdaf1b074d7f0fe422a1" title="Aitana bonmati" rating="95" price="100.000"/>
    <Cards image="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg" title="Cristiano ronaldo" rating="99" price="100.000.000"/>
    <Cards image="https://pbs.twimg.com/media/GDL5LO1X0AAAvto.jpg:large" title="Graham hansen " rating="96" price="200.000"/>
    <Cards image="https://www.usatoday.com/gcdn/authoring/authoring-images/2024/05/10/USAT/73645861007-mbappe.jpg?crop=2298,2298,x1196,y99" title="Kylian Mbappé" rating="98" price="500.000"/>
    <Cards image="https://assets-fr.imgfoot.com/media/cache/1200x1200/trent-alexander-arnold-cover.jpg" title="Alexander-arnold" price="80.000" rating="91"/>
    <Cards image="https://preview.redd.it/our-starboy-phil-foden-v0-h3fczy09u53c1.png?width=640&crop=smart&auto=webp&s=e3cab254af2bb2798942550795f5153b2c9b5694" title="Phill Foden" rating="90" price="70.000"/>
    </div>
</div>
    </div>
    <footer className="bg-orange-500 flex items-center gap-8 mt-10 p-10 border-1 border-solid border-gray-600 flex-col ">
        <div className="flex items-center justify-start gap-10">
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABRdJREFUaEPtmWWId0UUh5/XLlBR7G78oB9sERMVA7sVW1QUWxTBVgQxEUxsDOzGTkRRVBQDuzCxsbDnkbkye3fuvXN3//9XFvbAwu7cmXPmN3PO75wzO4UJLlMm+P6ZBPB/3+DkDUzEG1gA2AXYDFgCWGScID4G3gXuBa4HPu2jr48LzQycAhwOTNvHSI+5fwLnAccDv5SsKwWwHnBl+Fm0ROkA5nwI7AU81qWrBMA6wOM1Rd8CtwMvAm8Dv3UZavjurS4PrAlsDMxam7cu8ESb7i4AGngdWCwq+Qo4Mvj+NWPccNuy2cLHk6L+at4HEWCjO3UBOCf6vAoNrlWBT4aw+VTlasCzycC5wBFNNtsALAx8lCxcv8Qne4KbC9gzMtoLwMnAj8CJ8TYqdXqAcTFK2gDsB1waVzwHeDKDloOBCxKl3rguquiuAlQOBC7uC+DycAN7x0WnRWrrC8AA/T0Gem7tGcCxyQddZ434923A1vH3K4B9+gKQeWQgZQfg5oLdzxT9VfZYJXD6HHGNrPU88Ejk+Yq1TIjXJXpPCDnm1Pi37uTfyqPABn0BvJ+wj0Ce7ACwEnAjsFTHvDeBHcPpvhzn7RYoecVIEq7/LI7vn7iNmTqrty0GvgHmjMo08ErLxmSJs0IQdrFapcKMq6+f36Jz51haOMW9VPEwYkmbwb+TmY0sEJPQ07WNXA3cHa79KWDGSABbAp52JepfHZAgcrINcGv88FM4IPPEKCkFMF9ggi8y62cBXgUWj9/MFW6yqQTYELgWmDfON4uvEAL514xuA9hAVn7OZOl/P5QCmBv4OmNEDrdGqmQtoH4b9WUG48PJoIF8w7ABGAvfZYxcBewRxy8BDmhwh/qwtGixpphrDNi6DPQGZg/0+EPGiG41TxzfCHioEMDmMUac/k6g0qUz67aKBaOfrIV011FS6kLzh9P9vLZ6yWi8Gpbzvy8EYFOU1lQ5/TZM9yT6snstBZBjoeUCn7+RGGhysxwmN5x2XstksrUB/2CyeLpQDUi/I6QUgG2jrV8q00T2mH4MLpSebpN76JIPDPMG1P1M5HJ/vwXYvtCF7o8NjNPN8FXJki7fNPbJ1djAXUjFF9WYp6TkNqHdkezUbHxYBvgWwJ1x3IJwhvEEcc6F1Lcs8BJg56bo17vHoi1nT7cwkVXMZYY1kb2XmZxm4nGzUFspsV2mUrWUsGfWxSwlVga2DYG6a22jnrIlR052ShKc7FZVtsVBbPquTlaelq+b5JiwUWv70mLOOuho4OwWnSZIE6Ui5S7U14Vs4apHq7VjYdYWo6XltAfh6dpCtsm+wGVxgq1t9kmn7cSsEm1KFOv3mzoM+tmG5szQDtoq1nX/Fcvn4xqKt7p6mxmbGsXnGw9olLQBSFs6X+RstEvF3GC2terUXb6MAS6blIodoPGlyEaWFr0AHBrbPxfZDvqkMjUlbep9zvTJsRcAmce2shJpTWaZGqKbnZ4Y8hE53ct/n7pYwyRzSJxtMScb+W4zTLH3fS1JXBcCBzUZ7AIgjb6VUJin4MnI838MGIXlsod1VNL/Sp8WjY2H1gXAPW4S/P++2mZtbgxy2UGAfYIzVZU+7pql632vRV/d9oitlABwgYp8GcsmkwHfhOo8IB+yqp640UQpABX49C0vW3gN6x8c2rE6Ne/UG6gsiD4AKgULxkxqWziofzEZW2ZmXwPv6nOjYwHQR//Q504CGPoRdxiYvIHJGxjnCfwDHkX3MVHc7z4AAAAASUVORK5CYII="/>
            </div>
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABKRJREFUaEPtmHmoUEUUxn+WQppSuVCp/dNie4YVGdkGERVlBVm2QdBGlJWGiqGJ7YW2E60EJWkRRGEbKURZUWkLUVoZorhRmmlpUUTNBzN43jT3zvjug4d0v38uzJw5M2fO9s3twQ6OHjv4+WkN6G4Pth5oPdDwBtoQaniBjZf/rz3QDzgYWAms6+RV9gEOA5YBP3dGx/Z6YChwMzAa2Nds+AvwCTAB+LrgINJxLbCfkV0BzAfm+m+BGrarE98PjC/Qejtwa4Xcbs7w5/wF1Kn6ADgH2JDbr8QDCpVXgVNyysz8AuAs4A8ztjvwHnB4oZ5VwHGAvpUoMeBp4IrCTa3Y28DpfkCxLqNGGoEXgbuBH4DTXB5cCpwX7bPQrTuhiQGnAu8kFLwPPAPMc/E6ysX/me4glwG9I1nF9PnAS/6QYfo64LGE3kN8Lu1q5hSOCsskch74DjggWqnkezyh7VjgTWCPaE4JrvAJGOuql26/CmcDr5nJ333BSFa6OgOuBJ6KdrkDmFazuYx9FxhcISOvSW8O9wKTjNCTwDWpRXUGKHmGmEWq1bE3UjqPAhS7u0ST6hcKkS250wN7JnrLwFRVqjJACfV8tNFNLjweKthcIkp6Jb+FLmQYoJAogfrBhUZQPeaBeGGVAW8AZ0RxuJdrVJtLdgbOBV5JyN4DTCnUcZIPxyD+DXBoiQFKwp9c5u9shB917htXuHFfTw0UBjH+Ao4Alhbq+h7Y38iq+y+3a1MeuCBRJQ4EVJFKoDC7oUZQSV7aFK8HHjG6LnFh+ELOgLsiN8tiy3vqjBjuwucLI7AE+NOFk8YtxjgS93LBbYjofVUXCSkPqIOqMwao/SseS/Cpa25HG0E1QtEJVSWL1T6ht2aUqvIonAM+dz1iRM4DcdzN9l02Z4CSU94LeMsUAlU0VTaL+1xFmpxRqgv+m22kcyPQP2fAj8AgI3QnMDWzkep7TKP1VgjJqgqmi1GCWxwEfJvRbfuRekgHHakQksU7GaXqgOqEVZCOjxyNEJUIENUQ5bBQHZ8VjYk2i0vVYbEJG52tZ84D/0Ta1ExExqqg8vqwmfzNJ72N3TCtWi7PWFyVaHp2/kNPq8NYh0tPeWC9K10DjAYdUH0gBXXWLyPaoLhWfKcQNyfJKJGP9CGWWiMKso+ZyBqgcLC8fY7rARcnNIvrfOwbU5hWHqj01UEEMSZ0i4BjEouUi8rJgDURP0s+KR8EbjSLxF3ELkWLLZ4FLo/GVOJU6uogaq1Q2jsSkmFXR2N6C8wwY/+5zFQIiQOJC1mojiuZtbEqzhOJ5LsNmJ45fJjWTwE9U2O87h8v4v4y5pZIQO9k+1aofNSnkq3ubHqhnVh4+CA20//hKF2m3y6i9/adXWmASpsOVYLPHGs82R3m1xLhSCamzHUqki+5ugeNqonobx3kchGsTZ04fFiit3HcM6w65eBFFSGX/S+kmJvoHvbHRwdUh1WpVCJ3BfT3Qh3f8hxdin4o6BmrUp1E7lEfFum3iB4TvTwfX9sVp67QITKoc4kYZlFqQFZRdwm0BnTXzYd9Ww+0Hmh4A20INbzAxstbDzS+woYK/gV+I8Ux0VkAfwAAAABJRU5ErkJggg=="/>
            </div>
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAq9JREFUaEPtmEuITmEYx3+TSy65TyHlHoVhXMqKxMrGhmxsFGWDDU2ZwWqQplFki9LsJnsLJUoodymlKBuXiBkiC5fz1xmdOc457/Fe+s6X89S3+s7zf57/8zzv+/7ft4Umt5Ymz5+aQKM7WHeg7oBjBeoRciygs/t/0YGNwEpgPjAbmBCXbQQwE5gBjLcs5XvgNfAu4f8BeAm8AB4CV4uwizqwFjgLrLFMzpfbnYjgXuB2FmAegXbgvq8MPOD8BNqAJ2msPAK3AHWgSnYJ2FaGwDrgepUyT+SyCHiWzC2rAx3AyYoS2A2cMxG4AOysKIFe4KCJwBVgU0UJ9APbTQQeA8scCGwGTgOaV992DdhgIvAqPpxsg2tdjQT2AUeBybZAGX4q7nITgS/RIh7rEDS5MbRGZLqBPQ54SVed0HNMBHRouFjWzqZD6Ey6/RZB3gLTiwhI5wxaAJuKMvS/DqIeYK5ljI/R+ppSFGxqNLsSWC5WRuEeAo5YjOonYGIRgTHAV5fsodRLRxfQCYyziDWsQOlqjQa+WYAOufwAJLPzbGs8QvMsY3xOyPnfEFntDrGIl8bSfNgebkHiTXqLD01A2+gJQBrGhz0HFph2DN2OpllG+x4fYqOA/fFCnWSJleV2D1htIvAUWOwQdEu0U5wCFjpg5Llejm5mkip/LGuEpDfWBwjuA/I8sMtEoC+6NOzwES0AxmHgmImADpnjAYL7gJSUlqQuHKFVwF0f0QJgrAAemQjof612vQVVyf66Cyi5PN2yBLiZ1h0NZqOCPkjnUCS8pBgvAnqlaKTdAA7868NWMmHdj3ULkn7R06KeE2fFP1di0ja6AUoi6BCUDcRPizp1NcoanVwrI31dkwzqXxMIWt4S4HUHShQp6Cd1B4KWtwR43YESRQr6SdN34BdaGFUx1x1JoQAAAABJRU5ErkJggg=="/>
            </div>
            <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAx9JREFUaEPtmUvoTVEUxn//lEeUkRgYeERCYoKhZ3mNKMm7pIiUKDEgmQgJkVLIYyDFQCHvZIBMRCkZiFJEHlEGSvbHvnWcztl7nXPv/5576r+G56y91vfttfe39tmni5pbV83x00Og6gq2owIzgds5RM8DK5qZhKoJ3Aem1ZnAT2Ag8KssiaorINyTgSd1JnAKWFNnAsI+CXhahkQnLCHhfgxMrTMBYb/qJfVLESLtqMAM4I4R1HtgJ3AR+GYZ02kEkphvAg/9gzPA6yxC7SAQ6sSWSZaPYtztIWCdrpRf7SswPa/8XvtfAEsjkyMhuNedS2gIMAzoC3wGniWShQjcAOYAY4BdwJIcIi0nMBTYCswGhgP9EokboBqPLAQavmM9kcUpIi0jIOB7gNWBkqcJ6LicWX4g7ZsMOw5QvpHA9VbIqJbIAx80tGTToEKbOETApBnWPmAFr6QdR6CXV4vxpinpQALarPuN4DuuAtpEr7w8hjjcAp4Dvb2MShLLqFCBefrnGtsD54DlgagHXIzdTlJ/BHyKyGjLCXz1H91ZgfcB2wwZKyMwxXXJRzkA3wGjHAHdKsSsMgL6sNDyyLLtbl/sjSH37yvrA6cDHXeC37QWDpVV4ASwNgehGtsbC3pgnv/ezXK/7CZikTFOpltIhY4D63KC5x6uMvw3AEdz4hwEtnQXgcNO0zflBD/rDlerjIlDUrwROGaMU7gCywDdHueZ7nF0nxOy0cDLgIOWl06apS20hPoAHwJ9QNcecxM3B2kQ6uI6vWq/ZJkkeLBbQt9Lozd0Yq3RzZEEamYXgLfebyKw0gvAgMDYQ4bYUW6xo8QgL5eaqZjpLDTCHfz6xxz9e/lm3vUYx/91ixGQzyxAh7VWWpFGGMxrIaAAlqVkJdj0b6VkIisBjbnkbhsWWlHm+F1zPzPmNxnjv+FFCMhXmr2+BAApli4DjjTzOykrbxECjfELADU5bcKY/QZOAjuATzHnMu/LEGjk0dWKPnZ02kya5FQN7or/wP9YBph1TDMEkjlUDUmtuq5u5tpmrSLQNsDpRD0EKpt6n/gPkPqVMdCmd5sAAAAASUVORK5CYII="/>
            </div>
        
        </div>
        <hr className="w-96" />
        <div className="flex items-center justify-center gap-6 text-xl flex-col">
            <p>Home</p>
            <p>Buy</p>
            <p>News</p>
            <p>EA app and Origin for mac</p>
        </div>
        
        
    </footer>
</body>

  </>
)
}