import Accordion from "../components/Accordion"


function AccordionPage() {
    const items = [
        {
            id: 1,
            label: "Can I use React on a Project?",
            content: "Yes you can use React on a Project. Yes you can use React on a Project. Yes you can use React on a Project."
        },
        {
            id: 2,
            label: "Can I use JavaScript on a Project?",
            content: "Yes you can use JavaScript on a Project"
        },
        {
            id: 3,
            label: "Can I use CSS on a Project?",
            content: "Yes you can use CSS on a Project"
        }
    ]


    return <div>
        <Accordion items={items} />
    </div>
}

export default AccordionPage