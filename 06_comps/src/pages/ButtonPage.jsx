import Button from "../components/Button"
import { GoBell, GoCloudDownload } from 'react-icons/go'

function ButtonPage() {
    return <div>
        <div>
            <Button primary rounded outline>
                <GoBell />
                Click me!!!
            </Button>
        </div>
        <div>
            <Button secondary outline>
                <GoCloudDownload />
                Click me!!!
            </Button>
        </div>
        <div>
            <Button success>
                Click me!!!
            </Button>
        </div>
        <div>
            <Button warning>
                Click me!!!
            </Button>
        </div>
        <div>
            <Button danger rounded>
                Click me!!!
            </Button>
        </div>
    </div>
}

export default ButtonPage