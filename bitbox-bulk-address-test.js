/*
  Attempts to replicate an issue reported in the BITBOX Discord channel:
  https://discord.gg/m5h28ND
*/

"use strict"

const BITBOXSDK = require("bitbox-sdk/lib/bitbox-sdk").default
const BITBOX = new BITBOXSDK({restURL: "https://trest.bitcoin.com/v1/"})


const ADDR = [
  "bchtest:qqhykr8frsmp0ckj8ykg4asaw34g9mdhzcwqqk9h5c",
  "bchtest:qrwdqtc4n7tav90vqky98lfz7m97lwtjluajr0rwgm",
  "bchtest:qrgv7nelnnx298kqtqvz77tqf5acel4rsvwf846wa2",
  "bchtest:qzqvan4fwr8vwd9sy9686k0t55tragpthyatu2jtyx",
  "bchtest:qr7m7vvm50c4lramx8pde046pn7pxndesskup68n6w",
  "bchtest:qp2glwf327vpgsuf6vmrxrhfggfxtjq3u50r725927",
  "bchtest:qzj87h02h63smkgsrm82gaegx76kea0gzscph57skp",
  "bchtest:qz8r7mhwhrmvzsmejd0wekuswnrl6j0tmscvt2ycrh",
  "bchtest:qzylpwcujgj4pn2mhljcm6kv2el9045xl59fd50akp",
  "bchtest:qq470p4jwpnrgz2rpl8f7ycalyg6leqnvyzrm296ul",
  "bchtest:qqecjje75z8e0hvfdc9mmvwkr0k4q9msyge22s03le",
  "bchtest:qrsfajnl5d5xc8jrkkhpeu8kypwepdf6uqwnjg8hj5",
  "bchtest:qqjud0uhantjzh3qymrjj8nect8azdajtc4v5t8rcr",
  "bchtest:qrjjuj5gjys7tm0sjtgaytnlp7ah4m89yc8v2ekrrx"
]

async function addressDetails() {
  try {
    // first query.
    let balance = await BITBOX.Address.details(ADDR)
    console.log(`BCH Balance information:`)
    console.log(balance)

    await sleep(1000)

    // second query.
    balance = await BITBOX.Address.details(ADDR)
    console.log(`BCH Balance information:`)
    console.log(balance)

  } catch (err) {
    console.error(`Error in getBalance: `, err)
    throw err
  }
}
addressDetails()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
