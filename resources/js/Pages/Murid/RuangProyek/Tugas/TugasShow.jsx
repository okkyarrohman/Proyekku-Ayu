import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";

export default function TugasShow({ auth }) {
    const { tugases, answers } = usePage().props;

    const { data, setData, post, errors } = useForm({
        tugas_id: tugases.id,
        answer_1: "",
        answer_3: "",
        answer_4: "",
        answer_5: "",
        answer_6: "",
        date_1: "",
        date_2: "",
        date_3: "",
        date_4: "",
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        post(route("tugas.store"));
    };

    console.log("TUGAS", tugases);
    console.log("ANSWER", answers);

    return (
        <AuthenticatedLayout authUser={auth.user} title="Ruang Proyek">
            <p>name : {tugases.name}</p>
            <p>deadline : {tugases.deadline}</p>
            <form onSubmit={handleOnSubmit} className="space-y-5">
                <div className="border border-primary-100 p-4">
                    <p>{tugases.step_1}</p>
                    <p>{tugases.desc_1}</p>
                    <input
                        type="text"
                        name="answer_1"
                        value={data.answer_1}
                        onChange={(e) => setData("answer_1", e.target.value)}
                    />
                </div>
                <div className="border border-primary-100 p-4">
                    <p>{tugases.step_2}</p>
                    <p>{tugases.desc_2}</p>
                    <input
                        type="datetime-local"
                        name="date_1"
                        value={data.date_1}
                        onChange={(e) => setData("date_1", e.target.value)}
                    />
                    <input
                        type="datetime-local"
                        name="date_2"
                        value={data.date_2}
                        onChange={(e) => setData("date_2", e.target.value)}
                    />
                    <input
                        type="datetime-local"
                        name="date_3"
                        value={data.date_3}
                        onChange={(e) => setData("date_3", e.target.value)}
                    />
                    <input
                        type="datetime-local"
                        name="date_4"
                        value={data.date_4}
                        onChange={(e) => setData("date_4", e.target.value)}
                    />
                </div>
                <div className="border border-primary-100 p-4">
                    <p>{tugases.step_3}</p>
                    <p>{tugases.desc_3}</p>
                    <input
                        type="text"
                        name="answer_3"
                        value={data.answer_3}
                        onChange={(e) => setData("answer_3", e.target.value)}
                    />
                </div>
                <div className="border border-primary-100 p-4">
                    <p>{tugases.step_4}</p>
                    <p>{tugases.desc_4}</p>
                    <input
                        type="text"
                        name="answer_4"
                        value={data.answer_4}
                        onChange={(e) => setData("answer_4", e.target.value)}
                    />
                </div>
                <div className="border border-primary-100 p-4">
                    <p>{tugases.step_5}</p>
                    <p>{tugases.desc_5}</p>
                    <input
                        type="text"
                        name="answer_5"
                        value={data.answer_5}
                        onChange={(e) => setData("answer_5", e.target.value)}
                    />
                </div>
                <div className="border border-primary-100 p-4">
                    <p>{tugases.step_6}</p>
                    <p>{tugases.desc_6}</p>
                    <input
                        type="text"
                        name="answer_6"
                        value={data.answer_6}
                        onChange={(e) => setData("answer_6", e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </AuthenticatedLayout>
    );
}
