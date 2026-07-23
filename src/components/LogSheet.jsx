export default function LogSheet({ logs }) {

    return (
        <div className="bg-white p-5 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
                ELD Driver Logs
            </h2>

            {
                logs.map((log) => (

                    <div
                        key={log.day}
                        className="border rounded-lg p-5 mb-5"
                    >
                        <h3 className="text-lg font-bold mb-4">
                            Day {log.day}
                        </h3>

                        <div className="space-y-4">

                            <div>
                                <div className="flex justify-between">
                                    <span>Driving</span>
                                    <span>{log.driving} hrs</span>
                                </div>

                                <div className="bg-gray-200 h-5 rounded">
                                    <div
                                        className="bg-blue-500 h-5 rounded"
                                        style={{
                                            width: `${(log.driving / 24) * 100}%`
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <span>On Duty</span>
                                    <span>{log.on_duty} hrs</span>
                                </div>

                                <div className="bg-gray-200 h-5 rounded">
                                    <div
                                        className="bg-green-500 h-5 rounded"
                                        style={{
                                            width: `${(log.on_duty / 24) * 100}%`
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <span>Off Duty</span>
                                    <span>{log.off_duty} hrs</span>
                                </div>

                                <div className="bg-gray-200 h-5 rounded">
                                    <div
                                        className="bg-red-500 h-5 rounded"
                                        style={{
                                            width: `${(log.off_duty / 24) * 100}%`
                                        }}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                ))
            }

        </div>
    );
}