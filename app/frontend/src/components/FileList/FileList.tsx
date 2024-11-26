import React from 'react';

const FileList: React.FC = () => {
    // 示例文件列表
    const files = ['file1.pdf', 'file2.pdf', 'file3.pdf'];

    return (
        <div>
            <h3>File List</h3>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>{file}</li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;